"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  duration?: number; // milliseconds
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(current, value, {
      duration: duration / 1000,
      ease: "easeOut",
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <motion.span
      className={cn("font-bold text-4xl", className)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {current}
      {suffix}
    </motion.span>
  );
}
