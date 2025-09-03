"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Filter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

const filterOptions = ["all", "web", "mobile", "backend"];

interface Repo {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  stars: number;
}

type RepoWithMeta = Repo & { featured?: boolean };

function isProjectWithMeta(p: Repo | RepoWithMeta): p is RepoWithMeta {
  return (p as RepoWithMeta).stars !== undefined;
}

export function PortfolioSection() {
  const [filter, setFilter] = useState("all");
  // Select top 4 projects and add stars property
  const topProjects = projects.slice(0, 4).map((p) => ({
    ...p,
    stars: 0, // Local projects don't have stars, set to 0
  }));
  const repos = topProjects;
  const { t } = useTranslation("common");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = repos.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 bg-muted relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("portfolio.title")}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("portfolio.subtitle")}
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={filter === option ? "default" : "outline"}
                onClick={() => setFilter(option)}
                className="capitalize"
              >
                <Filter className="w-4 h-4 mr-2" />
                {t(`portfolio.filter.${option}`)}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group glassmorphism rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -10 }}
                layout
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  {isProjectWithMeta(project) && project.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stars and Action Buttons */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">
                      ⭐ {isProjectWithMeta(project) ? project.stars : 0}
                    </div>
                    <div />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("portfolio.viewProject")}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button (if needed) */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-muted-foreground">
              No projects found for this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
