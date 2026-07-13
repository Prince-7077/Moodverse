 import backgroundImage from "../assets/background.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 h-screen flex items-center">

        <div className="max-w-xl">

          <h1 className="text-6xl font-bold leading-tight text-white">
            Don't search by words.
            <br />
            Search by{" "}
            <span className="text-pink-500">
              feelings.
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-200 leading-8">
            Discover music, movies, books, quotes and more
            based on how you feel right now.
          </p>

          <Link to="/mood">
            <button className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition duration-300 text-lg font-semibold">
              How are you feeling?
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;