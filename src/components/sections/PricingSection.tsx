import { Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { pricingPlans } from "@/data/pricing";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function PricingSection() {
  return (
    <section id="planos" className="bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Planos"
          title="Escolha a solução ideal"
          highlight="para o seu momento."
          align="center"
          className="mx-auto"
          description="Fale com a gente para receber uma proposta sob medida para o seu negócio."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <AnimatedReveal key={plan.id} delay={index * 0.1}>
              <Card
                highlighted={plan.highlighted}
                className="flex h-full flex-col"
              >
                {plan.highlighted && (
                  <Badge className="mb-4 self-start">Mais escolhido</Badge>
                )}
                <h3 className="text-xl font-semibold text-secondary">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-secondary/60">
                  {plan.description}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-secondary/70"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <LinkButton
                  href={buildWhatsAppLink(plan.name)}
                  external
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                  icon={<MessageCircle size={18} />}
                  iconPosition="left"
                >
                  {plan.ctaLabel}
                </LinkButton>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
