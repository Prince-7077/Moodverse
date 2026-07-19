import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          Mood<span className="text-pink-500">Verse</span>
        </Link>

        {/* Navigation Menu */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"}
            flex-col absolute top-20 left-0 w-full bg-slate-900 p-6 gap-6
            md:static md:flex md:flex-row md:bg-transparent md:p-0 md:w-auto md:gap-10
            text-white text-lg items-center
          `}
        >
          <li>
            <Link
              to="/"
              className="hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/favorites"
              className="hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              ❤️ Favorites
            </Link>
          </li>

          {/* Existing User */}
          <li>
            <Link
              to="/login"
              className="hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Explore
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Community
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Premium
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <Link
              to="/profile"
              className="hover:text-pink-500 transition"
              onClick={() => setIsOpen(false)}
            >
              👤 Profile
            </Link>
          </li>

          {/* Sign In Button (Mobile Only) */}
          <li className="md:hidden w-full">
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition duration-300"
            >
              Sign In
            </Link>
          </li>
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Sign In Button */}
        <Link
          to="/signup"
          className="hidden md:block bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition duration-300"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;