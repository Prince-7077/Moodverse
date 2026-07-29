import { useFavorites } from "../context/FavoritesContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const RecommendationCard = ({ item, category }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { user } = useContext(AuthContext);

   const handleFavorite = async () => {
  // User must be logged in
  if (!user) {
    toast.error("Please login first!");
    return;
  }

  try {
    if (isFavorite) {
      // Remove from MongoDB
      await axios.delete(
        `http://localhost:5000/api/favorites/${user._id || user.id}/${encodeURIComponent(title)}`
      );

      // Remove from local context
      removeFavorite(item);

      toast.info("Removed from Favorites");
    } else {
      // Save locally
      addFavorite(item);

      console.log("Auth User:", user);
      console.log("User ID:", user._id || user.id);

      console.log({
        user: user._id || user.id,
        title,
        type: category,
        mood: "Happy",
      });

      // Save to MongoDB
      await axios.post("http://localhost:5000/api/favorites", {
        user: user._id || user.id,
        title,
        
        type: category,
        mood: "Happy",
        artist: subtitle,
        description: description,
        image: image,
        link: link,
      });

      toast.success("❤️ Added to Favorites");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};
   
  // Support BOTH string and object data
  const title = typeof item === "string" ? item : item.title;
  const subtitle = typeof item === "string" ? "" : item.subtitle;
  const description =
    typeof item === "string"
      ? `${category.charAt(0).toUpperCase() + category.slice(1)} Recommendation`
      : item.description;

  const image =
    typeof item === "string"
      ? null
      : item.image;

  const link =
    typeof item === "string"
      ? "#"
      : item.link;

  const isFavorite = favorites.some((fav) =>
    typeof fav === "string"
      ? fav === item
      : fav.title === title
  );

  const getEmoji = () => {
    switch (category) {
      case "music":
        return "🎵";
      case "movies":
        return "🎬";
      case "books":
        return "📚";
      case "quotes":
        return "💬";
      default:
        return "⭐";
    }
  };

  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">

      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div className="h-56 flex items-center justify-center text-7xl bg-slate-700">
          {getEmoji()}
        </div>
      )}

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        {subtitle && (
          <p className="text-pink-400 mt-1">
            {subtitle}
          </p>
        )}

        <p className="text-gray-400 mt-3">
          {description}
        </p>

        <div className="flex justify-between items-center mt-6">

          {link === "#" ? (
            <button className="bg-pink-500 px-5 py-2 rounded-full">
              Explore →
            </button>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-pink-500 px-5 py-2 rounded-full hover:bg-pink-600"
            >
              Explore →
            </a>
          )}

          <button
            onClick={handleFavorite}
            className="text-3xl"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default RecommendationCard;