import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <AnimatedReveal>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Seu negócio no digital, com mais resultado.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-secondary/70">
            Fale agora com a Lyveryn e descubra a solução ideal para o seu
            negócio.
          </p>
          <LinkButton
            href={buildWhatsAppLink("Quero começar meu projeto")}
            external
            variant="secondary"
            size="lg"
            icon={<MessageCircle size={20} />}
            iconPosition="left"
            className="mt-8"
          >
            Falar pelo WhatsApp
          </LinkButton>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
