"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const navGroups = [
  {
    title: "Navegação",
    links: [
      { label: "Início",      href: "#inicio" },
      { label: "Sobre",       href: "#sobre" },
      { label: "Tratamentos", href: "#tratamentos" },
      { label: "Estrutura",   href: "#estrutura" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato",     href: "#contato" },
    ],
  },
  {
    title: "Tratamentos",
    links: [
      { label: "Implantes Dentários",       href: "#tratamentos" },
      { label: "Lentes de Contato Dental",  href: "#tratamentos" },
      { label: "Clareamento",               href: "#tratamentos" },
      { label: "Invisalign",                href: "#tratamentos" },
      { label: "Harmonização Facial",       href: "#tratamentos" },
      { label: "Ortodontia",                href: "#tratamentos" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-100">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border border-gold-500/50" />
                <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center">
                  <span
                    className="text-[13px] font-semibold text-gold-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    RR
                  </span>
                </div>
              </div>
              <div>
                <p
                  className="text-[14px] font-semibold text-cream-100 tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ribeiro &amp; Rocha
                </p>
                <p className="text-[9px] font-medium text-gold-500/80 tracking-[0.18em] uppercase">
                  Odontologia Premium
                </p>
              </div>
            </div>

            <p className="text-xs text-warm-300 leading-relaxed mb-6 max-w-[220px]">
              Odontologia de alta performance com amor, tecnologia e propósito.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-white/[0.14]
                    flex items-center justify-center text-warm-300 hover:text-gold-400
                    border border-white/[0.08] transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-white/[0.14]
                  flex items-center justify-center text-warm-300 hover:text-[#25D366]
                  border border-white/[0.08] transition-all duration-200 text-[13px]"
              >
                📱
              </motion.a>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-cream-300 tracking-widest uppercase mb-5">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-warm-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + Hours */}
          <div>
            <h4 className="text-xs font-semibold text-cream-300 tracking-widest uppercase mb-5">
              Contato
            </h4>
            <ul className="space-y-3 mb-7">
              {[
                { Icon: Phone, text: "(11) 99999-9999" },
                { Icon: Phone, text: "(11) 99999-9999" },
                { Icon: Mail,  text: "contato@ribeirorocha.com.br" },
                { Icon: MapPin, text: "Rua das Orquídeas, 123\nJardins, São Paulo – SP\nCEP 01410-000" },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Icon size={13} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-warm-400 leading-relaxed whitespace-pre-line">{text}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold text-cream-300 tracking-widest uppercase mb-4">
              Horário de Atendimento
            </h4>
            <div className="flex items-start gap-2.5">
              <Clock size={13} className="text-gold-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-warm-400 leading-relaxed">
                <p>Segunda a Sexta</p>
                <p>8h às 19h</p>
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-gold-400
                hover:text-gold-300 transition-colors"
            >
              <MapPin size={12} />
              Ver no mapa →
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-warm-500">
          <p>© 2024 Ribeiro &amp; Rocha Odontologia Premium. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-warm-300 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-warm-300 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
