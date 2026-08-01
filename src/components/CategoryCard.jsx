const CategoryCard = ({ icon, title }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:bg-pink-500 hover:scale-105 shadow-lg">
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-white text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;