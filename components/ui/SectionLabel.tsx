"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-500" />
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400">
        {children}
      </span>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-violet-500" />
    </motion.div>
  );
}
