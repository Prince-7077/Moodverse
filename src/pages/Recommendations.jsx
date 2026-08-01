import { useParams } from "react-router-dom";
import { useState } from "react";
import recommendations from "../data/recommendations";
import RecommendationCard from "../abc/RecommendationCard";

const Recommendations = () => {
  const { mood } = useParams();

  const [selectedCategory, setSelectedCategory] = useState("music");

  const data = recommendations[mood];

  console.log("Mood:", mood);
  console.log("Data:", data);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
        <h1 className="text-4xl">No recommendations found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-5xl font-bold">
          You're Feeling{" "}
          <span className="text-pink-500">{mood} 😊</span>
        </h1>

        <p className="text-gray-400 mt-3">
          Here are some recommendations based on your mood.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="max-w-7xl mx-auto px-8 flex gap-4 flex-wrap">

        <button
          onClick={() => setSelectedCategory("music")}
          className={`px-6 py-3 rounded-full transition ${
            selectedCategory === "music"
              ? "bg-pink-500"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          🎵 Music
        </button>

        <button
          onClick={() => setSelectedCategory("movies")}
          className={`px-6 py-3 rounded-full transition ${
            selectedCategory === "movies"
              ? "bg-pink-500"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          🎬 Movies
        </button>

        <button
          onClick={() => setSelectedCategory("books")}
          className={`px-6 py-3 rounded-full transition ${
            selectedCategory === "books"
              ? "bg-pink-500"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          📚 Books
        </button>

        <button
          onClick={() => setSelectedCategory("quotes")}
          className={`px-6 py-3 rounded-full transition ${
            selectedCategory === "quotes"
              ? "bg-pink-500"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          💬 Quotes
        </button>

      </div>

      {/* Recommendation Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-8 py-16">

        {data[selectedCategory].map((item, index) => (
          <RecommendationCard
            key={index}
            item={item}
            category={selectedCategory}
          />
        ))}

      </div>

    </div>
  );
};

export default Recommendations;