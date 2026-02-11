"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Calculator, Video, BookOpen, QrCode } from "lucide-react";
import { Box, User, Globe, Github } from "lucide-react";

const projects = [
  {
    title: "3D Model Viewer",
    description:
      "An interactive web-based 3D model viewer built during my Software Internship at Noitavonne. Developed using React Three Fiber and Three.js, this tool allows users to load, rotate, zoom, and explore 3D models directly in the browser. The project strengthened my skills in WebGL rendering, performance optimization, and modern frontend architecture.",
    icon: Box,
    technologies: [
      "React",
      "Node.js",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
    ],
    category: "3D Web Application",
    github: "https://github.com/Omkarkumbhar47/3D-Viewer",
    live: "https://3d-viewer-eight.vercel.app/",
  },
  {
    title: "Pravin's 3D Portfolio",
    description:
      "A modern and visually engaging portfolio website for a professional 3D Artist and Animator. Designed to showcase high-quality 3D models, animations, and creative projects using smooth interactions powered by Three.js and React. Built with performance and visual storytelling in mind.",
    icon: User,
    technologies: ["React", "Three.js", "React Three Fiber", "Tailwind CSS"],
    category: "Portfolio Website",
    github: "https://github.com/Omkarkumbhar47/3d_pravin_portfolio",
    live: "https://pravinportfolio-five.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of the major projects I've worked on, demonstrating my
            expertise in full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-5">
                      {project.github && (
                        <a href={project.github} target="_blank">
                          <Badge className="cursor-pointer hover:scale-105">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Badge>
                        </a>
                      )}

                      {project.live && (
                        <a href={project.live} target="_blank">
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:scale-105"
                          >
                            <Globe className="w-3 h-3 mr-1" />
                            Live Demo
                          </Badge>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
