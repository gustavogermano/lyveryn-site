"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { LinkButton } from "@/components/ui/LinkButton";
import { navigationConfig } from "@/config/navigation.config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/utils/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm shadow-secondary/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationConfig.main.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary/70 transition-colors hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href={buildWhatsAppLink()} external size="sm">
            Falar no WhatsApp
          </LinkButton>
        </div>

        <button
          className="rounded-full p-2 text-secondary lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo />
              <button
                className="rounded-full p-2 text-secondary"
                aria-label="Fechar menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 py-8">
              {navigationConfig.main.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-secondary/5 py-4 text-lg font-medium text-secondary"
                >
                  {item.label}
                </motion.a>
              ))}
              <LinkButton
                href={buildWhatsAppLink()}
                external
                size="lg"
                className="mt-6 w-full"
              >
                Falar no WhatsApp
              </LinkButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
