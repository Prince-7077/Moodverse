import CategoryCard from "./CategoryCard";

const categories = [
  { icon: "🎵", title: "Music" },
  { icon: "🎬", title: "Movies" },
  { icon: "📚", title: "Books" },
  { icon: "🎮", title: "Games" },
  { icon: "🎧", title: "Podcasts" },
  { icon: "🍕", title: "Food" },
  { icon: "✈️", title: "Travel" },
  { icon: "💬", title: "Quotes" },
];

const CategorySection = () => {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white text-center">
          Explore by Category
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 text-lg">
          Select what you'd like to discover today.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default CategorySection;