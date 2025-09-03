"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  skill: string;
  level: number;
  className?: string;
}

export function SkillBar({ skill, level, className }: SkillBarProps) {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
