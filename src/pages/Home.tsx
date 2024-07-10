import Categories from "../components/Home/Categories";
import FrequentQuestions from "../components/Home/FrequentQuestions";
import Hero from "../components/Home/Hero";
import RecommendedSection from "../components/Home/RecommendedSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedSection />
      <Categories />
      <FrequentQuestions />
    </div>
  );
};

export default Home;
