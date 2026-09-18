import { Monitor, Utensils, Layers, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { services } from "@/data/services";

const icons = {
  monitor: Monitor,
  utensils: Utensils,
  layers: Layers,
};

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Soluções digitais com foco"
          highlight="no seu negócio."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <AnimatedReveal key={service.id} delay={index * 0.1}>
                <Card className="h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-secondary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/60">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-secondary/70"
                      >
                        <Check size={16} className="shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
