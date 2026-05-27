"use client";

import { motion } from "framer-motion";
import { Heart, Cpu, Gem, GraduationCap, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    desc: "Cuidado individualizado em cada detalhe",
    color: "#7A1A1A",
    bg: "rgba(122,26,26,0.08)",
  },
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    desc: "Equipamentos e técnicas inovadoras",
    color: "#A67C3A",
    bg: "rgba(196,154,74,0.1)",
  },
  {
    icon: Gem,
    title: "Ambiente Sofisticado",
    desc: "Conforto e exclusividade pensados para você",
    color: "#7A1A1A",
    bg: "rgba(122,26,26,0.08)",
  },
  {
    icon: GraduationCap,
    title: "Especialistas Qualificados",
    desc: "Foco, disciplina e constantemente atualizados",
    color: "#A67C3A",
    bg: "rgba(196,154,74,0.1)",
  },
  {
    icon: Leaf,
    title: "Resultados Naturais",
    desc: "Beleza, harmonia e saúde para o seu sorriso",
    color: "#7A1A1A",
    bg: "rgba(122,26,26,0.08)",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    desc: "Mais praticidade e respeito ao seu tempo",
    color: "#A67C3A",
    bg: "rgba(196,154,74,0.1)",
  },
];

export default function FeaturesBar() {
  return (
    <section className="relative py-14 bg-white border-y border-cream-300/60 overflow-hidden">
      {/* Subtle warm tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-white to-cream-100 opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: f.bg }}
                >
                  <Icon size={22} style={{ color: f.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    className="text-[13px] font-semibold text-warm-800 mb-0.5 leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {f.title}
                  </p>
                  <p className="text-[11px] text-warm-400 leading-snug">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
