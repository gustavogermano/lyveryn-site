"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { InstagramIcon } from "@/components/common/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { siteConfig } from "@/config/site.config";
import { submitContactForm } from "@/services/contact.service";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { redirectUrl } = submitContactForm(form);
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-secondary py-24 text-white">
      <Container className="grid gap-16 lg:grid-cols-2">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Vamos conversar?"
            title="Seu projeto digital"
            highlight="começa aqui."
            className="[&_h2]:text-white"
          />

          <div className="mt-10 flex flex-col gap-5">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 transition-colors hover:text-primary"
            >
              <MessageCircle size={18} className="text-primary" />
              {siteConfig.contact.whatsappDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 text-white/80 transition-colors hover:text-primary"
            >
              <Mail size={18} className="text-primary" />
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 transition-colors hover:text-primary"
            >
              <InstagramIcon width={18} height={18} className="text-primary" />
              {siteConfig.contact.instagramHandle}
            </a>
            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 transition-colors hover:text-primary"
            >
              <MapPin size={18} className="text-primary" />
              {siteConfig.contact.address.full}
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal direction="left">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-xl"
          >
            <Input
              id="name"
              label="Nome"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
            <Input
              id="phone"
              label="Telefone"
              placeholder="(19) 99999-9999"
              required
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            />
            <Textarea
              id="message"
              label="Mensagem"
              placeholder="Conte um pouco sobre o seu negócio"
              required
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
            />
            <Button
              type="submit"
              size="lg"
              icon={<Send size={18} />}
              iconPosition="left"
              className="mt-2"
            >
              Enviar mensagem
            </Button>
          </form>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
