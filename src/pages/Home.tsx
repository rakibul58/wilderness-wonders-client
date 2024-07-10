import Categories from "../components/Home/Categories";
import FeaturedSection from "../components/Home/FeaturedSection";
import FrequentQuestions from "../components/Home/FrequentQuestions";
import Hero from "../components/Home/Hero";
import RecommendedSection from "../components/Home/RecommendedSection";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedSection />
      <Categories />
      <FeaturedSection />
      <Testimonial />
      <FrequentQuestions />
    </div>
  );
};

export default Home;
