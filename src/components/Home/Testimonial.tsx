import { testimonials } from "../../constants/testimonial";
import SectionContainer from "../layout/SectionContainer";
import ComponentTitle from "../shared/ComponentTitle";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <SectionContainer>
      <section className="body-font">
        <div className="mx-auto">
          <ComponentTitle
            title="What Our Customers Say"
            subTitle="Hear from our happy campers"
          />
          <div className="flex flex-wrap -m-4">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default Testimonial;
