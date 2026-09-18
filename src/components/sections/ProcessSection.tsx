import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { siteConfig } from "@/config/site.config";

const steps = [
  {
    number: "1",
    title: "Entendimento",
    description: "Conversamos sobre seu negócio e objetivos.",
  },
  {
    number: "2",
    title: "Planejamento",
    description: "Definimos a melhor solução para você.",
  },
  {
    number: "3",
    title: "Desenvolvimento",
    description: "Criamos com foco em qualidade e performance.",
  },
  {
    number: "4",
    title: "Entrega",
    description: "Seu site ou cardápio no ar, pronto para gerar resultados.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="bg-secondary py-24 text-white">
      <Container>
        <SectionHeading
          eyebrow="Nosso processo"
          title="Do planejamento ao resultado,"
          highlight="de forma simples e transparente."
          className="[&_h2]:text-white [&_span]:text-secondary"
        />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block"
          />
          {steps.map((step, index) => (
            <AnimatedReveal key={step.number} delay={index * 0.1} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-secondary">
                {step.number}
              </span>
              <h3 className="mt-5 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.3}>
          <div className="mt-16 grid gap-8 rounded-2xl bg-white/5 p-8 sm:grid-cols-3">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
