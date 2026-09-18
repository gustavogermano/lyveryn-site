import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem usa, recomenda."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedReveal key={testimonial.id} delay={index * 0.1}>
              <Card>
                <Quote className="text-primary" size={28} />
                <p className="mt-4 text-sm leading-relaxed text-secondary/70">
                  “{testimonial.content}”
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-secondary/50">{testimonial.role}</p>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
