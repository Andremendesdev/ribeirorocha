"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma consulta."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="px-4 py-2.5 rounded-2xl text-sm font-medium text-warm-800 whitespace-nowrap"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(196,154,74,0.20)",
              boxShadow: "0 4px 20px rgba(44,24,14,0.10)",
            }}
          >
            Fale conosco no WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #1DAB61 0%, #128C4A 100%)",
          boxShadow:
            "0 4px 20px rgba(29,171,97,0.40), 0 1px 4px rgba(29,171,97,0.20)",
          border: "1.5px solid rgba(255,255,255,0.25)",
        }}
      >
        {/* Pulso */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(29,171,97,0.30)" }}
          animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />

        <MessageCircle size={26} className="text-white" fill="white" strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}
