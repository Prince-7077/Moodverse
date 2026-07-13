import { useFavorites } from "../context/FavoritesContext";
import Navbar from "../components/Navbar";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

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
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="text-pink-400 mt-2">
                    {item.artist}
                  </p>

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
                      onClick={() => removeFavorite(item)}
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