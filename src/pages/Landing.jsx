import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MoodSection from "../components/MoodSection";
import Features from "../components/Features";
import CategorySection from "../Components/CategorySection";
import FeaturesSection from "../components/FeaturesSection";
import Recommendations from "./Recommendations";
import Footer from "../Components/Footer";

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