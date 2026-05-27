"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Send, User, Phone, ChevronDown } from "lucide-react";

const inputClass = `
  w-full px-4 py-3 rounded-xl text-sm text-warm-900 placeholder-warm-400
  bg-cream-50 border border-cream-300 focus:border-gold-400
  focus:outline-none focus:ring-2 focus:ring-gold-300/30
  transition-all duration-200 font-sans
`;

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── LEFT: CTA text ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Decorative dot pattern */}
            <div className="absolute left-0 w-48 h-48 dot-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <span className="section-label mb-6 inline-flex">Agendar Consulta</span>

              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-semibold text-warm-900 leading-tight mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Seu novo sorriso{" "}
                <br />
                <em className="italic text-rose-700">começa com um simples passo</em>
              </h2>

              <p className="text-base text-warm-500 leading-relaxed mb-8 max-w-sm">
                Agende sua avaliação e descubra o melhor plano de tratamento para você.
                Atendimento humanizado, tecnologia de ponta e resultados naturais.
              </p>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300/60">
                <p className="text-sm font-semibold text-warm-800 mb-1">
                  Ou fale diretamente no WhatsApp
                </p>
                <p className="text-xs text-warm-400 mb-4">Atendimento rápido e personalizado</p>
                <motion.a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl w-full justify-center
                    bg-[#25D366] hover:bg-[#1DAD58] text-white font-medium text-sm
                    shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </motion.a>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                {["Primeira consulta gratuita", "Resposta em até 1h", "Sem compromisso"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-xs text-warm-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-cream-300/60 shadow-card p-8">
              <h3
                className="text-xl font-semibold text-warm-900 mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Agendar Avaliação
              </h3>
              <p className="text-sm text-warm-400 mb-7">Preencha seus dados para entrarmos em contato</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div className="relative">
                  <label className="block text-xs font-medium text-warm-600 mb-1.5">Nome completo</label>
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-400 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-medium text-warm-600 mb-1.5">WhatsApp</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-400 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Treatment */}
                <div>
                  <label className="block text-xs font-medium text-warm-600 mb-1.5">Como podemos te ajudar?</label>
                  <div className="relative">
                    <select className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="">Selecione o tratamento</option>
                      <option>Implantes Dentários</option>
                      <option>Lentes de Contato Dental</option>
                      <option>Clareamento</option>
                      <option>Invisalign</option>
                      <option>Harmonização Facial</option>
                      <option>Ortodontia</option>
                      <option>Outro</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-warm-400 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-warm-600 mb-1.5">
                    Mensagem <span className="text-warm-300 font-normal">(opcional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte-nos um pouco mais sobre o que você procura..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(122,26,26,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl
                    bg-rose-700 hover:bg-rose-800 text-white font-medium text-sm
                    shadow-rose transition-all duration-300"
                >
                  <CalendarDays size={15} />
                  Agendar Consulta
                  <Send size={13} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
