"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Martins",
    role: "Designer, São Paulo",
    initials: "AM",
    color: "#7A1A1A",
    stars: 5,
    text: "A experiência na Ribeiro & Rocha foi incrível! Atendimento humanizado ao extremo e o resultado foi muito melhor do que eu esperava. Meu sorriso ficou perfeito!",
    treatment: "Lentes de Contato Dental",
  },
  {
    name: "Camila Souza",
    role: "Advogada, Campinas",
    initials: "CS",
    color: "#A67C3A",
    stars: 5,
    text: "Clínica linda, atendimento humanizado e profissionais extremamente competentes. Me senti segura do início ao fim. Super recomendo a todos que buscam qualidade!",
    treatment: "Invisalign",
    featured: true,
  },
  {
    name: "Rafael Oliveira",
    role: "Empresário, SP",
    initials: "RO",
    color: "#5C1212",
    stars: 5,
    text: "Fiz meu implante com eles e o resultado foi excelente. Super indico para quem busca qualidade e confiança. Equipe super atenciosa e profissional.",
    treatment: "Implantes Dentários",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-4">
            <span className="section-label">Depoimentos</span>
          </div>
          <h2
            className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-warm-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            O que nossos{" "}
            <em
              className="not-italic italic text-rose-700"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              pacientes dizem
            </em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-7 flex flex-col
                ${t.featured
                  ? "bg-gradient-to-br from-rose-700 to-rose-800 text-white shadow-rose"
                  : "bg-white border border-cream-300/60 shadow-card hover:shadow-card-hover transition-shadow duration-400"
                }`}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className={`mb-5 ${t.featured ? "text-white/30" : "text-gold-400/50"}`}
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <Star
                    key={s}
                    size={13}
                    className={t.featured ? "text-gold-300" : "text-gold-500"}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className={`text-sm leading-relaxed flex-1 mb-6
                  ${t.featured ? "text-white/90" : "text-warm-600"}`}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Treatment badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium mb-5 self-start
                ${t.featured
                  ? "bg-white/20 text-white/80"
                  : "bg-rose-50 text-rose-700 border border-rose-100"
                }`}>
                🦷 {t.treatment}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t pt-5
                ${t.featured ? 'border-white/20' : 'border-cream-300/60'}"
                style={{ borderColor: t.featured ? "rgba(255,255,255,0.2)" : "rgba(196,154,74,0.2)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center
                    text-white text-sm font-semibold flex-shrink-0"
                  style={{
                    backgroundColor: t.featured ? "rgba(255,255,255,0.25)" : t.color,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className={`text-sm font-semibold leading-tight
                    ${t.featured ? "text-white" : "text-warm-900"}`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.name}
                  </p>
                  <p className={`text-[11px] ${t.featured ? "text-white/60" : "text-warm-400"}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { value: "4.9/5.0", label: "Avaliação média" },
            { value: "1.200+", label: "Avaliações verificadas" },
            { value: "98%", label: "Clientes satisfeitos" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div>
                <p className="text-xl font-bold text-rose-700" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.value}
                </p>
                <p className="text-xs text-warm-400">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
