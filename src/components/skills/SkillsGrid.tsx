"use client";

import { skillGroups } from "@/data/skills";
import { SkillCategory } from "./SkillCategory";

export function SkillsGrid() {
  return (
    <div className="space-y-12">
      {skillGroups.map((group, index) => (
        <SkillCategory key={group.category} group={group} index={index} />
      ))}
    </div>
  );
}
