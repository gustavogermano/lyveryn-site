"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-secondary shadow-lg shadow-primary/40 sm:h-16 sm:w-16"
    >
      <MessageCircle size={28} fill="currentColor" className="text-secondary" />
    </motion.a>
  );
}
