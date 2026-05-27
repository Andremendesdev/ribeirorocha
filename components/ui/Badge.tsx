"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "violet" | "cyan" | "rose" | "amber" | "neutral";
  className?: string;
  animate?: boolean;
}

const variantMap = {
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  neutral: "bg-white/[0.05] text-slate-400 border-white/10",
};

const dotMap = {
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  rose: "bg-rose-400",
  amber: "bg-amber-400",
  neutral: "bg-slate-400",
};

export default function Badge({
  children,
  variant = "violet",
  className = "",
  animate = false,
}: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`
        inline-flex items-center gap-2 px-3 py-1
        rounded-full border text-xs font-medium tracking-wide uppercase
        ${variantMap[variant]}
        ${className}
      `}
    >
      <span
        className={`
          w-1.5 h-1.5 rounded-full
          ${dotMap[variant]}
          ${animate ? "animate-pulse" : ""}
        `}
      />
      {children}
    </motion.span>
  );
}
