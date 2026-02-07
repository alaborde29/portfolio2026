"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Globe, Smartphone, Code2, User } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    key: "web",
    href: "/projects/web",
    icon: Globe,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    key: "mobile",
    href: "/projects/mobile",
    icon: Smartphone,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    key: "skills",
    href: "/skills",
    icon: Code2,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    key: "about",
    href: "/about",
    icon: User,
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SectionCards() {
  const t = useTranslations("home.sections");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sections.map((section) => (
            <motion.div key={section.key} variants={item}>
              <Link href={`/${locale}${section.href}`}>
                <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                  <CardHeader className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{t(`${section.key}.title`)}</CardTitle>
                    <CardDescription>{t(`${section.key}.description`)}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
