import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiGreensock,
  SiMui,
  SiExpo,
  SiSwift,
  SiNodedotjs,
  SiPython,
  SiC,
  SiCplusplus,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVscodium,
  SiXcode,
  SiFigma,
  SiVercel,
  SiAndroid,
  SiApple,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiGooglegemini,
  SiN8N,
  SiAnthropic,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

export type SkillCategory = "frontend" | "backend" | "mobile" | "tools" | "databases" | "ai";

export interface Skill {
  name: string;
  icon: IconType;
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  labelKey: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    labelKey: "skills.categories.frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, category: "frontend" },
      { name: "TypeScript", icon: SiTypescript, category: "frontend" },
      { name: "React", icon: SiReact, category: "frontend" },
      { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
      { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
      { name: "Three.js", icon: SiThreedotjs, category: "frontend" },
      { name: "GSAP", icon: SiGreensock, category: "frontend" },
      { name: "MUI", icon: SiMui, category: "frontend" },
    ],
  },
  {
    category: "mobile",
    labelKey: "skills.categories.mobile",
    skills: [
      { name: "React Native", icon: SiReact, category: "mobile" },
      { name: "Expo", icon: SiExpo, category: "mobile" },
      { name: "Swift", icon: SiSwift, category: "mobile" },
      { name: "SwiftUI", icon: SiSwift, category: "mobile" },
      { name: "iOS", icon: SiApple, category: "mobile" },
      { name: "Android", icon: SiAndroid, category: "mobile" },
    ],
  },
  {
    category: "backend",
    labelKey: "skills.categories.backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, category: "backend" },
      { name: "Python", icon: SiPython, category: "backend" },
      { name: "C", icon: SiC, category: "backend" },
      { name: "C++", icon: SiCplusplus, category: "backend" },
      { name: "REST APIs", icon: TbApi, category: "backend" },
    ],
  },
  {
    category: "databases",
    labelKey: "skills.categories.databases",
    skills: [
      { name: "Firebase", icon: SiFirebase, category: "databases" },
      { name: "PostgreSQL", icon: SiPostgresql, category: "databases" },
      { name: "MongoDB", icon: SiMongodb, category: "databases" },
      { name: "Supabase", icon: SiSupabase, category: "databases" },
    ],
  },
  {
    category: "tools",
    labelKey: "skills.categories.tools",
    skills: [
      { name: "Git", icon: SiGit, category: "tools" },
      { name: "GitHub", icon: SiGithub, category: "tools" },
      { name: "VS Code", icon: SiVscodium, category: "tools" },
      { name: "Xcode", icon: SiXcode, category: "tools" },
      { name: "Figma", icon: SiFigma, category: "tools" },
      { name: "Vercel", icon: SiVercel, category: "tools" },
      { name: "Docker", icon: SiDocker, category: "tools" },
      { name: "Kubernetes", icon: SiKubernetes, category: "tools" },
    ],
  },
  {
    category: "ai",
    labelKey: "skills.categories.ai",
    skills: [
      { name: "ChatGPT", icon: SiOpenai, category: "ai" },
      { name: "Claude Code", icon: SiAnthropic, category: "ai" },
      { name: "Gemini", icon: SiGooglegemini, category: "ai" },
      { name: "n8n", icon: SiN8N, category: "ai" },
    ],
  },
];

// Main technologies for About page
export const mainTechnologies = [
  { name: "Swift", icon: SiSwift },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: SiReact },
  { name: "Firebase", icon: SiFirebase },
];
