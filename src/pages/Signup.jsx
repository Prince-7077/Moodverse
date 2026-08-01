import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://moodverse-k02w.onrender.com/api/auth/signup",
        user
      );

      // Success Toast
      toast.success("🎉 Welcome to MoodVerse! Your account has been created successfully.");

      // Clear the form
      setUser({
        name: "",
        email: "",
        password: "",
      });

      // Redirect after 2.5 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2500);

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-purple-950 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-10 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center text-white">
          Join <span className="text-pink-500">MoodVerse</span>
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Create your account and start exploring content based on your mood.
        </p>

        {/* Name */}
        <div className="mb-5">
          <label className="text-gray-300 block mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="👤 Enter your name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-gray-300 block mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="📧 Enter your email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="text-gray-300 block mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="🔒 Create a password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-purple-600 to-pink-500 py-3 rounded-xl text-lg font-semibold text-white hover:scale-105 transition duration-300 shadow-lg"
        >
          Create Account
        </button>

        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-slate-700"></div>

          <span className="mx-4 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-slate-700"></div>
        </div>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>

    </div>
  );
};

export default Signup;