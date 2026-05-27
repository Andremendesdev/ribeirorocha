"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";

const stats = [
  { value: 1000, suffix: "+", label: "Sorrisos transformados" },
  { value: 8,    suffix: "+", label: "Anos de experiência" },
  { value: 6,    suffix: "",  label: "Especialidades odontológicas" },
  { value: 100,  suffix: "%", label: "Comprometidos com sua satisfação" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-image">
              <div
                className="aspect-[4/3]"
                style={{
                  background:
                    "linear-gradient(145deg, #D4C0A0 0%, #C0A87A 30%, #A88A5A 60%, #8A6A38 100%)",
                }}
              >
                {/* Interior scene */}
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <svg viewBox="0 0 400 240" className="w-3/4 opacity-40" fill="none">
                    {/* Reception desk */}
                    <rect x="60" y="140" width="280" height="60" rx="8" fill="rgba(255,255,255,0.5)" />
                    <rect x="80" y="120" width="240" height="24" rx="4" fill="rgba(255,255,255,0.4)" />
                    {/* Decorative plant */}
                    <path d="M340 140 C340 100 320 70 310 40 C325 70 338 105 340 140Z" fill="rgba(80,130,60,0.5)" />
                    <path d="M340 140 C340 100 360 70 370 40 C355 70 342 105 340 140Z" fill="rgba(70,120,50,0.5)" />
                    <rect x="332" y="140" width="16" height="20" rx="2" fill="rgba(120,80,40,0.4)" />
                    {/* Wall art */}
                    <rect x="150" y="20" width="100" height="60" rx="8" fill="rgba(255,255,255,0.2)" />
                    <path d="M160 70 Q175 50 190 60 Q205 70 220 55 Q235 42 240 70Z" fill="rgba(196,154,74,0.3)" />
                  </svg>
                </div>
                {/* Light flare */}
                <div
                  className="absolute top-6 right-10 w-24 h-32 rounded-2xl opacity-40"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Dark bottom fade */}
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-warm-900/30 to-transparent" />
            </div>

            {/* Play button overlay */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center
                shadow-warm-xl group-hover:bg-white transition-all duration-300
                border border-gold-200/60">
                <Play size={22} className="text-rose-700 ml-1" fill="currentColor" />
              </div>
            </motion.button>

            {/* Dot pattern decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 dot-pattern opacity-50 -z-10 rounded-2xl" />

            {/* Gold accent ring */}
            <div className="absolute -z-10 inset-8 rounded-[2rem] border border-gold-300/40 translate-x-5 translate-y-5" />
          </motion.div>

          {/* ── RIGHT: Text + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="mb-6">
              <span className="section-label">Sobre a Clínica</span>
            </div>

            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-warm-900 leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Excelência em cada detalhe{" "}
              <br />
              <em className="italic text-rose-700">para cuidar de você</em>
            </h2>

            <p className="text-base text-warm-500 leading-relaxed mb-4">
              A Ribeiro &amp; Rocha nasceu do propósito de transformar vidas através de sorrisos.
              Nossa clínica oferece uma experiência premium, com estrutura moderna, tecnologia de
              ponta e uma equipe apaixonada por odontologia.
            </p>
            <p className="text-base text-warm-500 leading-relaxed mb-10">
              Cada tratamento é personalizado, respeitando a singularidade de cada paciente,
              para garantir resultados naturais e duradouros com segurança e conforto.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                >
                  <p
                    className="text-[2.2rem] font-bold text-rose-700 leading-none mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <CountUp target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-warm-500">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
