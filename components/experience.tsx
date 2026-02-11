"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  // {
  //   company: "RaMee Systems Pvt Ltd",
  //   position: "Software Engineer",
  //   duration: "February 2025 - Present (6 months)",
  //   location: "Aundh",
  //   description:
  //     "Currently working as a Software Engineer, contributing to innovative software solutions.",
  //   type: "recent",
  // },
  {
    company: "Nextastra Technologies Pvt Ltd",
    position: "MERN Stack Developer",
    startDate: "2025-11-01",
    location: "Pune, Maharashtra, India",
    description:
      "Working as a MERN Stack Developer, building scalable web applications using React, Node.js, Express, and MongoDB.",
    type: "current",
  },
  {
    company: "Nextastra Technologies Pvt Ltd",
    position: "React JS Developer Intern",
    startDate: "2024-05-01",
    endDate: "2024-11-01",
    location: "Pune, Maharashtra, India",
    description:
      "Developed responsive user interfaces using React.js, worked with APIs, reusable components, and improved UI performance.",
    type: "intern",
  },
  {
    company: "NOITAVONNE INDIA",
    position: "Full Stack Developer Intern",
    startDate: "2024-01-01",
    endDate: "2024-09-01",
    location: "Kolhapur, Maharashtra, India",
    description:
      "Worked on full-stack web applications using React, Node.js, and databases.",
    type: "intern",
  },
];

function calculateMonths(
  startDate: string,
  endDate: string | Date = new Date(),
): number {
  const start = new Date(startDate);
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  return months <= 0 ? 1 : months;
}
function formatDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  const startText = start.toLocaleDateString("en-US", options);
  const endText = endDate
    ? end.toLocaleDateString("en-US", options)
    : "Present";

  return `${startText} - ${endText}`;
}

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and the projects
            I've contributed to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full relative overflow-hidden ${
                  exp.type === "current" ? "border-primary shadow-lg" : ""
                }`}
              >
                <div className="absolute top-0 right-0 flex gap-2">
                  {exp.type === "current" && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                      Current
                    </div>
                  )}
                  {exp.type === "intern" && (
                    <div className="bg-orange-500 text-white px-3 py-1 text-xs font-medium">
                      Internship
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg mb-2 pr-20">
                    {exp.position}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-medium text-sm">{exp.company}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {formatDuration(exp.startDate, exp.endDate)} (
                        {calculateMonths(exp.startDate, exp.endDate)} Months)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  {/* {exp.type === "intern" && (
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs border-orange-200 text-orange-700"
                      >
                        Learning Experience
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs border-orange-200 text-orange-700"
                      >
                        3 Months
                      </Badge>
                    </div>
                  )} */}
                  {(exp.type === "intern" || exp.type === "current") && (
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          exp.type === "current"
                            ? "border-primary text-primary"
                            : "border-orange-200 text-orange-700"
                        }`}
                      >
                        {calculateMonths(exp.startDate, exp.endDate)} Months
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
