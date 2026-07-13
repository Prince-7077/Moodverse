import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    // Backend login API will be connected in the next step.
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 w-full max-w-md p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Welcome Back 👋
        </h1>

        <input
          type="email"
          name="email"
          placeholder="📧 Enter your email"
          value={user.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="🔒 Enter your password"
          value={user.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded-lg bg-slate-800 text-white outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 py-3 rounded-lg text-white font-bold transition"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </form>

    </div>
  );
};

export default Login;