"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/alaborde29",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/alexandre-laborde/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:laborde.a@live.fr",
    icon: Mail,
    label: "Email",
  },
];

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{t("madeWith")}</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>
              &copy; {currentYear} Alexandre Laborde. {t("rights")}.
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
