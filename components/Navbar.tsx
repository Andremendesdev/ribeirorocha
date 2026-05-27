"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays } from "lucide-react";

const navLinks = [
  { label: "Início",       href: "#inicio" },
  { label: "Sobre",        href: "#sobre" },
  { label: "Tratamentos",  href: "#tratamentos" },
  { label: "Estrutura",    href: "#estrutura" },
  { label: "Depoimentos",  href: "#depoimentos" },
  { label: "Contato",      href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b
          ${scrolled
            ? "bg-cream-50/92 backdrop-blur-xl shadow-warm-md border-gold-300/55 py-2 lg:py-3"
            : "bg-transparent border-gold-200/35 py-3 lg:py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">

          {/* Monogram Logo */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-8 h-8 lg:w-10 lg:h-10">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-gold-500/60 group-hover:border-gold-400 transition-colors" />
              {/* Inner fill */}
              <div className="absolute inset-[2px] lg:inset-[3px] rounded-full bg-gradient-to-br from-rose-700 to-rose-800 flex items-center justify-center">
                <span
                  className="text-[11px] lg:text-[13px] font-semibold text-gold-300 leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  RR
                </span>
              </div>
            </div>
            <div className="hidden sm:block leading-tight">
              <p
                className="text-[15px] font-semibold text-warm-800 tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ribeiro &amp; Rocha
              </p>
              <p className="text-[9px] font-medium text-gold-600 tracking-[0.18em] uppercase">
                Odontologia Premium
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="relative px-4 py-2 text-[13px] font-medium text-warm-600
                  hover:text-rose-700 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-rose-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contato"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full
                bg-rose-700 hover:bg-rose-800 text-white text-sm font-medium
                shadow-rose transition-all duration-300
                border border-rose-600/50"
            >
              <CalendarDays size={14} />
              Agendar Consulta
            </motion.a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-1.5 rounded-lg text-warm-700 hover:bg-cream-200 transition-colors"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={18} className="lg:w-5 lg:h-5" /> : <Menu size={18} className="lg:w-5 lg:h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-3 sm:inset-x-4 top-[52px] sm:top-[56px] lg:top-[76px] z-40 rounded-xl sm:rounded-2xl
              bg-cream-50/98 backdrop-blur-2xl border border-gold-200/60
              shadow-warm-xl overflow-hidden"
          >
            <div className="p-3 sm:p-5 space-y-0.5 sm:space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055 }}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-[13px] sm:text-sm font-medium text-warm-700
                    hover:text-rose-700 hover:bg-rose-700/5 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2 sm:pt-3 border-t border-gold-200/50">
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-lg sm:rounded-xl
                    bg-rose-700 text-white text-[13px] sm:text-sm font-medium"
                >
                  <CalendarDays size={13} className="sm:w-3.5 sm:h-3.5" />
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
