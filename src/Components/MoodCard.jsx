import { useNavigate } from "react-router-dom";

const MoodCard = ({ emoji, title }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recommendations/${title}`)}
      className="bg-slate-800 rounded-2xl p-8 cursor-pointer hover:scale-105 transition"
    >
      <div className="text-6xl">{emoji}</div>

      <h3 className="text-white text-2xl mt-4">
        {title}
      </h3>
    </div>
  );
};

export default MoodCard;