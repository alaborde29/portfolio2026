"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import type { SkillGroup } from "@/data/skills";

interface SkillCategoryProps {
  group: SkillGroup;
  index: number;
}

export function SkillCategory({ group, index }: SkillCategoryProps) {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-primary">
        {t(group.labelKey)}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {group.skills.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}
