import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-24">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Ainda tem dúvidas?"
          align="center"
          className="mx-auto"
        />

        <AnimatedReveal className="mt-12">
          <Accordion items={faqItems} />
        </AnimatedReveal>
      </Container>
    </section>
  );
}
