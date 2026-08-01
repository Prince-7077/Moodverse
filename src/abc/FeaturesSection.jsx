import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🤖",
    title: "AI Mood Detection",
    description:
      "Describe how you feel naturally, and MoodVerse understands your emotions.",
  },
  {
    icon: "🎵",
    title: "Smart Recommendations",
    description:
      "Get personalized music, movies, books, and more based on your mood.",
  },
  {
    icon: "⚡",
    title: "Fast & Personalized",
    description:
      "Receive recommendations instantly with a smooth user experience.",
  },
  {
    icon: "🌍",
    title: "Explore the Internet",
    description:
      "Discover content from different categories without endless searching.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-white">
          Why Choose MoodVerse?
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Everything you need to discover content that matches your emotions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;