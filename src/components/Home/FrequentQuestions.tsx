import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { faqs } from "../../constants/frequestQuestions";

const FrequentQuestions = () => {
  return (
    <div className="mt:8 pb-8 md:mt-20 md:pb-20">
      <h2 className="text-center font-bold text-4xl text-primary">
        Frequently Asked Questions
      </h2>
      <h3 className="text-center font-bold text-lg text-secondary dark:text-stone-400 mt-4 mb-6">
        Your Questions, Answered
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequentQuestions;
