"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: "default" | "violet" | "cyan" | "rose" | "amber";
}

const variantStyles = {
  default: "border-white/[0.08] hover:border-white/[0.15]",
  violet: "border-violet-500/20 hover:border-violet-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-400/40",
  rose: "border-rose-500/20 hover:border-rose-500/40",
  amber: "border-amber-500/20 hover:border-amber-400/40",
};

const variantGlow = {
  default: "",
  violet: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
  cyan: "hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
  rose: "hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]",
  amber: "hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]",
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  variant = "default",
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        relative rounded-2xl border
        bg-white/[0.04] backdrop-blur-xl
        transition-all duration-500
        ${variantStyles[variant]}
        ${variantGlow[variant]}
        ${hover ? "hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      {children}
    </motion.div>
  );
}
