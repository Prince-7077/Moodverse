const features = [
  {
    title: "🎵 Music",
    description: "Get music recommendations based on your mood.",
  },
  {
    title: "🎬 Movies",
    description: "Discover movies that match your emotions.",
  },
  {
    title: "📚 Books",
    description: "Find books that fit how you're feeling.",
  },
  {
    title: "🧘 Meditation",
    description: "Relax with guided meditation and calming content.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-white mb-14">
          Why Choose MoodVerse?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl font-semibold text-pink-500">
                {feature.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;