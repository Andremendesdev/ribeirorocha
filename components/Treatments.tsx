"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const treatments = [
  {
    title: "Implantes Dentários",
    desc: "Recupere a função e estética do seu sorriso com segurança e modernidade.",
    image: "/sorriso2.png",
    emoji: "🦷",
    gradient: "from-rose-700/90 to-rose-800/95",
    bg: "linear-gradient(145deg, #E8C8A0 0%, #D4A878 50%, #C09060 100%)",
  },
  {
    title: "Lentes de Contato Dental",
    desc: "Lentes ultrafinas para um sorriso perfeito, natural e harmônico.",
    image: "/sorriso.png",
    emoji: "✨",
    gradient: "from-gold-600/90 to-gold-700/95",
    bg: "linear-gradient(145deg, #F5E8D0 0%, #E8D0A8 50%, #D4B880 100%)",
  },
  {
    title: "Clareamento",
    desc: "Dentes mais brancos e luminosos com técnicas seguras e eficazes.",
    emoji: "💎",
    gradient: "from-warm-700/90 to-warm-800/95",
    bg: "linear-gradient(145deg, #EAD5B5 0%, #D8BF9A 50%, #C4A87A 100%)",
  },
  {
    title: "Invisalign",
    desc: "Alinhe seus dentes com conforto, discrição e tecnologia avançada.",
    emoji: "🌟",
    gradient: "from-rose-600/90 to-rose-700/95",
    bg: "linear-gradient(145deg, #E8D4C0 0%, #D4B89A 50%, #C0A078 100%)",
  },
  {
    title: "Harmonização Facial",
    desc: "Realce sua beleza natural com procedimentos minimamente invasivos.",
    emoji: "🌸",
    gradient: "from-gold-500/90 to-gold-600/95",
    bg: "linear-gradient(145deg, #F0E0C0 0%, #E0C89C 50%, #CCAE78 100%)",
  },
  {
    title: "Ortodontia",
    desc: "Soluções completas para dentes alinhados e uma mordida saudável.",
    emoji: "🎯",
    gradient: "from-warm-600/90 to-warm-700/95",
    bg: "linear-gradient(145deg, #E4CCA8 0%, #D4B890 50%, #C0A070 100%)",
  },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-24 bg-cream-100">
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
            <span className="section-label">Tratamentos</span>
          </div>
          <h2
            className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-warm-900 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Soluções completas para{" "}
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #7A1A1A, #A8251E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              o seu melhor sorriso
            </em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[1.25rem] overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500">

                {/* Image area */}
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ background: t.bg }}
                >
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-110 transform transition-transform">
                        {t.emoji}
                      </span>
                    </div>
                  )}
                  {!t.image && (
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                      <span className="text-sm opacity-80">🦷</span>
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t ${t.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                </div>

                {/* Text content */}
                <div className="p-5 bg-white">
                  <h3
                    className="text-[15px] font-semibold text-warm-900 mb-1.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.title}
                  </h3>
                  <p className="text-xs text-warm-500 leading-relaxed mb-3">{t.desc}</p>
                  <motion.a
                    href="#contato"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700
                      hover:text-rose-800 group/link transition-colors"
                  >
                    Saiba mais
                    <ArrowRight
                      size={12}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
