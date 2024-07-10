import Categories from "../components/Home/Categories";
import FeaturedSection from "../components/Home/FeaturedSection";
import FrequentQuestions from "../components/Home/FrequentQuestions";
import Hero from "../components/Home/Hero";
import RecommendedSection from "../components/Home/RecommendedSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedSection />
      <Categories />
      <FeaturedSection />
      <FrequentQuestions />
    </div>
  );
};

export default Home;
