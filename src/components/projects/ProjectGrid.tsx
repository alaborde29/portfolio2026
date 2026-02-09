"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Button } from "@/components/ui/button";
import type { Project, ProjectCategory } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

const filterOptions: Array<{ key: ProjectCategory | "all"; labelKey: string }> = [
  { key: "all", labelKey: "projects.filter.all" },
  { key: "frontend", labelKey: "projects.filter.frontend" },
  { key: "backend", labelKey: "projects.filter.backend" },
  { key: "fullstack", labelKey: "projects.filter.fullstack" },
];

export function ProjectGrid({ projects, showFilter = true }: ProjectGridProps) {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div>
      {showFilter && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option.key}
              variant={activeFilter === option.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(option.key)}
              className="transition-all"
            >
              {t(option.labelKey)}
            </Button>
          ))}
        </div>
      )}

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No projects found with the selected filter.
        </p>
      )}

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
