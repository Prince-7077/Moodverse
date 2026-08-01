import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-4 gap-10">

                {/* Logo */}
                <div>
                    <h2 className="text-3xl font-bold text-white">
                        Mood<span className="text-pink-500">Verse</span>
                    </h2>

                    <p className="mt-4 text-gray-400 leading-7">
                        Discover music, movies, books and inspirational quotes
                        based on your current mood.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-3">
                        <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
                        <li><Link to="/login" className="hover:text-pink-500">Login</Link></li>
                        <li><Link to="/signup" className="hover:text-pink-500">Sign Up</Link></li>
                        <li><Link to="/favorites" className="hover:text-pink-500">Favorites</Link></li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Features
                    </h3>

                    <ul className="space-y-3">
                        <li>🎵 Mood Music</li>
                        <li>🎬 Movie Picks</li>
                        <li>📚 Book Suggestions</li>
                        <li>💬 Daily Quotes</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Connect
                    </h3>

                    <div className="space-y-3">

                        <a
                            href="mailto:support@moodverse.com"
                            className="flex items-center gap-3 hover:text-pink-500 transition"
                        >
                            <FaEnvelope size={20} />
                            support@moodverse.com
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 hover:text-pink-500 transition"
                        >
                            <FaGithub size={20} />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 hover:text-pink-500 transition"
                        >
                            <FaLinkedin size={20} />
                            LinkedIn
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 hover:text-pink-500 transition"
                        >
                            <FaInstagram size={20} />
                            Instagram
                        </a>

                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 py-6 text-center text-gray-500">
                 © 2026 MoodVerse • Designed by ❤️Prince
            </div>
        </footer>
    );
};

export default Footer;