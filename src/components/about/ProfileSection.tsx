"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mainTechnologies } from "@/data/skills";

const socialLinks = [
  {
    href: "https://github.com/alaborde29",
    icon: Github,
    labelKey: "contact.github",
  },
  {
    href: "https://www.linkedin.com/in/alexandre-laborde/",
    icon: Linkedin,
    labelKey: "contact.linkedin",
  },
  {
    href: "mailto:laborde.a@live.fr",
    icon: Mail,
    labelKey: "contact.email",
  },
];

export function ProfileSection() {
  const t = useTranslations("about");

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-1"
      >
        <Card className="sticky top-24 overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/profile.webp"
              alt="Alexandre Laborde"
              fill
              className="object-cover"
              priority
            />
          </div>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Alexandre Laborde</CardTitle>
            <p className="text-muted-foreground">{t("subtitle")}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t("location")}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{t("status")}</span>
            </div>
            <Separator />
            <div className="flex justify-center gap-2">
              {socialLinks.map((link) => (
                <Button key={link.labelKey} asChild variant="ghost" size="icon">
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(link.labelKey)}
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div>
                <p className="text-lg font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary">6+</p>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bio and Details */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-8 lg:col-span-2"
      >
        {/* Bio */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("bio")}
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              {t("education")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-2 border-primary/50 pl-4">
              <h4 className="font-semibold">Epitech</h4>
              <p className="text-sm text-muted-foreground"> {t("diplome")}</p>
              <p className="mt-2 text-muted-foreground">
                {t("diplomeDescription")}
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-4">
              <h4 className="font-semibold">Lycée Yves Thépot</h4>
              <p className="text-sm text-muted-foreground"> Baccalauréat S-SI - 2015 - 2018</p>
              <p className="mt-2 text-muted-foreground">
                {t("bacDescription")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Highlight */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Technologies principales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              {mainTechnologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 rounded-lg bg-primary/5 p-3 text-center"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{t("contact.title")}</h3>
              <p className="text-muted-foreground">
                Interested in working together? Let's connect!
              </p>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="mailto:laborde.a@live.fr">
                <Mail className="h-4 w-4" />
                {t("contact.email")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
