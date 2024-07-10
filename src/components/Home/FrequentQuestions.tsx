import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { faqs } from "../../constants/frequentQuestions";
import SectionContainer from "../layout/SectionContainer";
import ComponentTitle from "../shared/ComponentTitle";

const FrequentQuestions = () => {
  return (
    <SectionContainer>
      <ComponentTitle
        title={"Frequently Asked Questions"}
        subTitle={"Your Questions, Answered"}
      />
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </SectionContainer>
  );
};

export default FrequentQuestions;
