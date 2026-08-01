import { useFavorites } from "../context/FavoritesContext";
import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const Favorites = () => {
  const { user } = useContext(AuthContext);

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const res = await axios.get(
          `https://moodverse-k02w.onrender.com/api/favorites/${user._id || user.id}`
        );

        setFavorites(res.data.favorites);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();
  }, [user]);
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10 pt-32">

        <h1 className="text-5xl font-bold text-pink-500 mb-10">
          ❤️ My Favorites
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-400 text-xl">
            No favorites yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {favorites.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="h-56 bg-slate-700 flex items-center justify-center text-6xl">
                    ❤️
                  </div>
                )}
                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  {item.artist && (
                    <p className="text-pink-400 mt-2">
                      {item.artist}
                    </p>
                  )}

                  <p className="text-gray-400 mt-3">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center mt-6">

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-pink-500 px-5 py-2 rounded-full"
                    >
                      Explore →
                    </a>

                    <button
                      onClick={async () => {
                        try {
                          await axios.delete(
                            `https://moodverse-k02w.onrender.com/api/favorites/${user._id || user.id}/${encodeURIComponent(item.title)}`
                          );

                          setFavorites((prev) =>
                            prev.filter((fav) => fav._id !== item._id)
                          );

                        } catch (error) {
                          console.log(error);
                        }
                      }}
                      className="text-3xl"
                    >
                      ❤️
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </>
  );
};

export default Favorites;