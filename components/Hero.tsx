"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Star } from "lucide-react";
import Image from "next/image";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
};

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const avatars = [
  { initials: "AM", color: "#C49A4A" },
  { initials: "CS", color: "#7A1A1A" },
  { initials: "LF", color: "#8A6A2E" },
  { initials: "RB", color: "#A8251E" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Warm background gradients */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-300/60 to-transparent" />

      {/* Dot pattern accent top-left */}
      <div className="absolute top-24 left-0 w-48 h-48 dot-pattern opacity-50 pointer-events-none" />
      {/* Dot pattern bottom right */}
      <div className="absolute bottom-16 right-0 w-40 h-40 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── LEFT: Text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          {/* Label */}
          <motion.div variants={item} className="mb-7">
            <span className="section-label">
              <span className="w-1 h-1 rounded-full bg-gold-500 inline-block" />
              Odontologia Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mb-6 leading-[1.08] text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block text-[clamp(2.4rem,5vw,3.75rem)] font-semibold text-warm-900">
              Excelência que
            </span>
            <span className="block text-[clamp(2.4rem,5vw,3.75rem)] font-semibold text-warm-900">
              transforma{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #7A1A1A 0%, #A8251E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                sorrisos
              </em>
            </span>
            <span className="block text-[clamp(2.4rem,5vw,3.75rem)] font-semibold text-warm-900">
              e autoestima.
            </span>
          </motion.h1>

          {/* Body text */}
          <motion.p
            variants={item}
            className="mb-8 text-base leading-relaxed text-warm-500 max-w-md"
          >
            Na Ribeiro &amp; Rocha, unimos tecnologia avançada, materiais de alta
            qualidade e atendimento humanizado para oferecer uma experiência única
            e resultados naturais.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(122,26,26,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full
                bg-rose-700 hover:bg-rose-800 text-white font-medium text-sm
                shadow-rose transition-all duration-300"
            >
              <CalendarDays size={15} />
              Agendar Consulta
            </motion.a>

            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full
                border border-warm-300 text-warm-700 hover:text-rose-700
                hover:border-rose-300 hover:bg-rose-50/50
                font-medium text-sm transition-all duration-300"
            >
              <MessageCircle size={15} />
              Falar no WhatsApp
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="flex items-center gap-4">
            {/* Stacked avatars */}
            <div className="flex -space-x-2.5">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-cream-100 flex items-center justify-center
                    text-xs font-semibold text-white flex-shrink-0"
                  style={{ backgroundColor: a.color, zIndex: avatars.length - i }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-xs text-warm-500">
                <span className="font-semibold text-warm-800">Mais de 1.000</span> sorrisos transformados
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Clinic image ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main image container */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-image">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src="/hero.png"
                alt="Clínica Ribeiro & Rocha — consultório odontológico premium"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-warm-900/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating card — experience */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-5 -left-6 flex items-center gap-3
              px-5 py-3.5 rounded-2xl bg-white border border-gold-200/60
              shadow-card"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7A1A1A, #A8251E)" }}>
              <Star size={16} className="text-gold-300" fill="currentColor" />
            </div>
            <div>
              <p className="text-xs font-semibold text-warm-900">+8 Anos de experiência</p>
              <p className="text-[11px] text-warm-400">Especialistas qualificados</p>
            </div>
          </motion.div>

          {/* Floating card — technology */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -top-4 -right-5 flex items-center gap-3
              px-5 py-3.5 rounded-2xl bg-white border border-gold-200/60
              shadow-card"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #A67C3A, #C49A4A)" }}>
              <span className="text-white text-lg">🦷</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-warm-900">Tecnologia Digital</p>
              <p className="text-[11px] text-warm-400">Equipamentos de última geração</p>
            </div>
          </motion.div>

          {/* Gold accent ring */}
          <div className="absolute -z-10 inset-6 rounded-[2rem] border-2 border-gold-300/30 translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </section>
  );
}
