import Navbar from "../abc/Navbar";
import Hero from "../abc/Hero";
import MoodSection from "../abc/MoodSection";
import Features from "../abc/Features";
import CategorySection from "../abc/CategorySection";
import FeaturesSection from "../abc/FeaturesSection";
import Recommendations from "./Recommendations";
import Footer from "../abc/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MoodSection />
      <Features />
      <CategorySection />
      <FeaturesSection />
      <Recommendations />
      <Footer/>
    </>
  );
};

export default Landing;