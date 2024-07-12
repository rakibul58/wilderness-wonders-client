import ComponentTitle from "../shared/ComponentTitle";
import { Button } from "../ui/button";

const MissionStatement = () => {
  return (
    <section className="py-6 mt-28">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 md:p-10 md:px-24 xl:px-48">
        <ComponentTitle title="Our Mission" subTitle="Want to know more about us?" />
        <p className="pb-10 text-xl text-center">
          At Our Company, we strive to deliver the highest quality products and
          services to our customers. Our mission is to foster a culture of
          innovation, integrity, and excellence, ensuring we exceed expectations
          in all that we do.We are committed to making a positive impact in our
          community and the world at large. Our values guide our actions,
          driving us to create sustainable solutions and build lasting
          relationships with our stakeholders.Join us on our journey as we
          continue to grow and achieve greatness together. Your support and
          trust are the foundations of our success, and we are dedicated to
          earning it every day.
        </p>
        <Button className="px-8 py-3 text-lg font-semibold rounded">
          Learn more
        </Button>
      </div>
    </section>
  );
};

export default MissionStatement;
