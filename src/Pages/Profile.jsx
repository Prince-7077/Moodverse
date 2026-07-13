import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-8">

      <div className="bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-linear-to-r from-purple-600 to-pink-500 h-40 relative">

          <div className="absolute -bottom-16 left-10">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-slate-900"
            />
          </div>

        </div>

        {/* Content */}
        <div className="pt-20 px-10 pb-10">

          <h1 className="text-4xl font-bold">
            Prince 👋
          </h1>

          <p className="text-gray-400 mt-2">
            prince@example.com
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h2 className="text-4xl">❤️</h2>
              <p className="mt-3 text-gray-400">Favorites</p>
              <h3 className="text-3xl font-bold mt-2">12</h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h2 className="text-4xl">😊</h2>
              <p className="mt-3 text-gray-400">Last Mood</p>
              <h3 className="text-2xl font-bold mt-2">Happy</h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h2 className="text-4xl">🔥</h2>
              <p className="mt-3 text-gray-400">Mood Checks</p>
              <h3 className="text-3xl font-bold mt-2">28</h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              <h2 className="text-4xl">⭐</h2>
              <p className="mt-3 text-gray-400">Membership</p>
              <h3 className="text-2xl font-bold mt-2">Free</h3>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <button className="bg-pink-500 px-6 py-3 rounded-xl hover:bg-pink-600 transition">
              Edit Profile
            </button>

            <button className="bg-red-500 px-6 py-3 rounded-xl hover:bg-red-600 transition">
              Logout
            </button>

            <Link
              to="/"
              className="bg-slate-700 px-6 py-3 rounded-xl hover:bg-slate-600 transition"
            >
              Home
            </Link>

          </div>

        </div>

      </div>

     </div>
  );
};

export default Profile;