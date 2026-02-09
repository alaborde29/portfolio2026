"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ExternalLink, Github, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const t = useTranslations();

  if (!project) return null;

  const allImages = project.screenshots?.length
    ? [project.image, ...project.screenshots]
    : [project.image];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t(project.titleKey)}</DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {project.year}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Screenshot Carousel */}
          <div className="px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {allImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={image}
                        alt={`${t(project.titleKey)} screenshot ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {allImages.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
            {allImages.length > 1 && (
              <p className="text-center text-sm text-muted-foreground mt-2">
                {t("projects.modal.swipeHint", { count: allImages.length })}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold">{t("projects.modal.about")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescriptionKey
                ? t(project.longDescriptionKey)
                : t(project.descriptionKey)}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="font-semibold">{t("projects.modal.technologies")}</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <Button asChild className="gap-2">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t("projects.viewProject")}
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="gap-2">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  {t("projects.viewCode")}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
