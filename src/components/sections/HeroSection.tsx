"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site.config";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pb-20 pt-36 sm:pt-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[320px] w-[320px] rounded-full bg-secondary/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge>Mídia Kit / 2025</Badge>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
            Tecnologia que{" "}
            <span className="relative inline-block text-secondary">
              <span className="relative z-10">impulsiona</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/60" />
            </span>{" "}
            o seu negócio.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary/60 sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <LinkButton
              href={buildWhatsAppLink("Vim pelo site")}
              external
              size="lg"
              icon={<MessageCircle size={20} />}
              iconPosition="left"
            >
              Pedir no WhatsApp
            </LinkButton>
            <LinkButton
              href="#servicos"
              variant="outline"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Ver serviços
            </LinkButton>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                <p className="text-sm text-secondary/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-2xl shadow-secondary/10 backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-secondary">
              <div className="flex items-center gap-1.5 bg-secondary/90 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="space-y-4 p-6">
                <div className="h-3 w-2/3 rounded-full bg-white/20" />
                <div className="h-3 w-1/2 rounded-full bg-white/10" />
                <div className="mt-6 h-32 rounded-xl bg-primary/20" />
                <div className="flex gap-3">
                  <div className="h-9 flex-1 rounded-full bg-primary" />
                  <div className="h-9 w-9 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-secondary/10 sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-secondary">
              <MessageCircle size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-secondary">Pedido enviado</p>
              <p className="text-xs text-secondary/50">via WhatsApp</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
