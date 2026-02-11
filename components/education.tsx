"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  // {
  //   degree: "Master of Computer Applications (MCA)",
  //   field: "Computer Science",
  //   institution: "KIT's IMER",
  //   duration: "October 2021 - July 2023",
  //   location: "Kolhapur, Maharashtra",
  //   type: "Masters",
  // },
  {
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    institution:
      "Tatyasaheb Kore Institute of Engineering & Technology, Warananagar",
    duration: "August 2020 - June 2024",
    location: "Warananagar, Kolhapur, Maharashtra",
    type: "Bachelors",
  },
];

export function Education() {
  return (
    <section id="education" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background in computer science and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {edu.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{edu.degree}</CardTitle>
                  <p className="text-muted-foreground font-medium text-sm">
                    {edu.field}
                  </p>
                  <p className="text-base font-semibold text-primary mt-1">
                    {edu.institution}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
