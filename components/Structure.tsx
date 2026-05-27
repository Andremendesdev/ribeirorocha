"use client";

import { motion } from "framer-motion";

const images = [
  {
    label: "Sala de Atendimento",
    aspect: "aspect-[4/3]",
    bg: "linear-gradient(145deg, #E8D5B0 0%, #D4B880 50%, #C09A60 100%)",
    icon: "🪑",
    span: "lg:col-span-2",
  },
  {
    label: "Recepção",
    aspect: "aspect-square",
    bg: "linear-gradient(145deg, #EAD8B8 0%, #D8C090 50%, #C4A870 100%)",
    icon: "🌿",
    span: "",
  },
  {
    label: "Tecnologia Digital",
    aspect: "aspect-square",
    bg: "linear-gradient(145deg, #E0CCA8 0%, #CEB888 50%, #B8A068 100%)",
    icon: "💻",
    span: "",
  },
  {
    label: "Sala Premium",
    aspect: "aspect-[4/3]",
    bg: "linear-gradient(145deg, #DECCA8 0%, #CCBA88 50%, #B8A068 100%)",
    icon: "✨",
    span: "",
  },
  {
    label: "Conforto & Design",
    aspect: "aspect-[4/3]",
    bg: "linear-gradient(145deg, #E8D0A8 0%, #D4BC88 50%, #C0A468 100%)",
    icon: "🏛️",
    span: "",
  },
];

export default function Structure() {
  return (
    <section id="estrutura" className="py-24 bg-cream-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-4">
            <span className="section-label">Estrutura</span>
          </div>
          <h2
            className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-warm-900 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Um ambiente{" "}
            <em className="italic text-rose-700" style={{ fontFamily: "var(--font-playfair)" }}>
              pensado para você
            </em>
          </h2>
          <p className="text-warm-500 text-base mt-3 max-w-lg mx-auto">
            Cada espaço foi projetado para transmitir conforto, elegância e bem-estar durante toda a sua visita.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden img-hover shadow-card hover:shadow-card-hover transition-shadow duration-500 ${img.span}`}
            >
              <div className={`${img.aspect} w-full`} style={{ background: img.bg }}>
                {/* Interior scene */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-25">{img.icon}</span>
                </div>
                {/* Warm light flare */}
                <div
                  className="absolute top-0 right-0 w-1/3 h-1/2 opacity-30"
                  style={{ background: "radial-gradient(ellipse at top right, rgba(255,255,255,0.6), transparent)" }}
                />
                {/* Bottom overlay with label */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-warm-900/60 to-transparent">
                  <p className="text-white text-xs font-medium">{img.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
