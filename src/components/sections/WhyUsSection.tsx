import { Zap, ShieldCheck, Code2, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";

const reasons = [
  {
    icon: Zap,
    title: "Agilidade",
    description: "Projetos entregues com rapidez e organização.",
  },
  {
    icon: ShieldCheck,
    title: "Confiabilidade",
    description: "Tecnologia segura e suporte próximo.",
  },
  {
    icon: Code2,
    title: "Design estratégico",
    description: "Sites que comunicam e geram resultados.",
  },
  {
    icon: UserCheck,
    title: "Atendimento personalizado",
    description: "Você fala com quem desenvolve o seu projeto.",
  },
];

export function WhyUsSection() {
  return (
    <section id="por-que" className="bg-white py-24">
      <Container className="grid gap-16 lg:grid-cols-2">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Por que Lyveryn?"
            title="Seu negócio único,"
            highlight="uma solução sob medida."
          />
        </AnimatedReveal>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <AnimatedReveal key={reason.title} delay={index * 0.08}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-secondary">
                <reason.icon size={20} />
              </span>
              <h3 className="mt-4 font-semibold text-secondary">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/60">
                {reason.description}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
