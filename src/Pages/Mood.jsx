import { useNavigate } from "react-router-dom";

const Mood = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold mb-4">
        How are you feeling today?
      </h1>

      <p className="text-gray-400 mb-12">
        Choose the mood that best describes you.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

        <button
          onClick={() => navigate("/recommendations/Happy")}
          className="bg-slate-800 p-8 rounded-2xl hover:bg-pink-500 transition"
        >
          😊
          <p className="mt-3">Happy</p>
        </button>

        <button
          onClick={() => navigate("/recommendations/Sad")}
          className="bg-slate-800 p-8 rounded-2xl hover:bg-pink-500 transition"
        >
          😢
          <p className="mt-3">Sad</p>
        </button>

        <button
          onClick={() => navigate("/recommendations/Relaxed")}
          className="bg-slate-800 p-8 rounded-2xl hover:bg-pink-500 transition"
        >
          😌
          <p className="mt-3">Relaxed</p>
        </button>

        <button
          onClick={() => navigate("/recommendations/Angry")}
          className="bg-slate-800 p-8 rounded-2xl hover:bg-pink-500 transition"
        >
          😡
          <p className="mt-3">Angry</p>
        </button>

        <button
          onClick={() => navigate("/recommendations/Motivated")}
          className="bg-slate-800 p-8 rounded-2xl hover:bg-pink-500 transition"
        >
          🚀
          <p className="mt-3">Motivated</p>
        </button>

      </div>

    </div>
  );
};

export default Mood;