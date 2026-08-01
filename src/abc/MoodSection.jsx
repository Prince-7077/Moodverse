import MoodCard from "./MoodCard";

const moods = [
  {
    emoji: "😊",
    title: "Happy",
  },
  {
    emoji: "😢",
    title: "Sad",
  },
  {
    emoji: "😌",
    title: "Relaxed",
  },
  {
    emoji: "😡",
    title: "Angry",
  },
  {
    emoji: "😴",
    title: "Tired",
  },
  {
    emoji: "❤️",
    title: "Romantic",
  },
  {
  emoji: "🤩",
  title: "Excited",
}
];

const MoodSection = () => {
  return (
    <section className="bg-slate-950 py-24">

      <h1 className="text-white text-5xl font-bold text-center mb-16">
        Choose Your Mood
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8">

        {moods.map((mood, index) => (
          <MoodCard
            key={index}
            emoji={mood.emoji}
            title={mood.title}
          />
        ))}

      </div>

    </section>
  );
};

export default MoodSection;