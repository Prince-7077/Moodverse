import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          Mood<span className="text-pink-500">Verse</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-white text-lg items-center">

          <li>
            <Link
              to="/"
              className="hover:text-pink-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/favorites"
              className="hover:text-pink-400 transition"
            >
              ❤️ Favorites
            </Link>
          </li>

          {/* Existing User */}
          <li>
            <Link
              to="/login"
              className="hover:text-pink-400 transition"
            >
              Login
            </Link>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400 transition">
              Explore
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400 transition">
              Community
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400 transition">
              Premium
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400 transition">
              About
            </a>
          </li>

          <li>
            <Link
              to="/profile"
              className="hover:text-pink-500 transition"
            >
              👤 Profile
            </Link>
          </li>

        </ul>

        {/* New User Button */}
        <Link
          to="/signup"
          className="bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition duration-300"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;