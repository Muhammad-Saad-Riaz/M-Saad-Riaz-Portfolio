"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Heart, Sparkle, Laptop } from "lucide-react";
import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text"

const timeline = [
  {
    year: "Present",
    title: "Frontend & SaaS-Focused Development",
    description:
      "Building polished, production-ready SaaS interfaces and dashboards with a strong emphasis on UI quality, performance optimization, and scalable component-based architecture.",
    icon: Rocket,
  },
  {
    year: "Late 2025",
    title: "Advanced React & Next.js Projects",
    description:
      "Deepened my understanding of modern frontend development by building complex applications involving routing, state management, animations, and responsive layouts.",
    icon: Code2,
  },
  {
    year: "Mid 2025",
    title: "Foundation in Web Development",
    description:
      "Started my journey with HTML, CSS, and JavaScript, focusing on responsive design principles and building a strong foundation for modern frameworks.",
    icon: Heart,
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* 1. Header: Photo & Bio */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-20">
          {/* Profile Picture Column (5/12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex justify-center relative"
          >
            {/* The Glow Effect behind the photo */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 p-2 bg-zinc-900/50 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/msr.png"
                  alt="Muhammad Saad Riaz"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Column (7/12) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              About <AuroraText>Me</AuroraText>
            </h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                I’m a{" "}
                <span className="text-white font-medium">
                  Frontend Developer
                </span>{" "}
                who specializes in building modern, high-quality web interfaces
                with a strong focus on performance, motion, and user
                experience.
              </p>
              <p>
                I enjoy turning complex ideas into clean, intuitive products.
                Through hands-on projects like{" "}
                <span className="text-zinc-200">AImate</span> and{" "}
                <span className="text-zinc-200">EMAE</span>, I’ve built
                production-ready SaaS dashboards, landing pages, and e-commerce
                experiences using modern frontend technologies and scalable UI Patterns.
              </p>
              <p>
                My goal is to work on impactful products where clean design,
                thoughtful interactions, and scalable frontend architecture truly matter.
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Laptop className="w-4 h-4 text-blue-400" />
                  <span>Remote Ready</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Sparkle className="w-4 h-4 text-orange-400" />
                  <span>SaaS and UI Specialist</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. Journey Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-10 space-y-12">
          <h3 className="text-2xl font-bold text-white pl-8 md:pl-12 mb-8 uppercase tracking-widest text-sm opacity-50">
            My Growth Path
          </h3>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <span className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-black border border-zinc-800 text-blue-500">
                  <Icon size={16} />
                </span>
                <div>
                  <span className="text-xs font-bold text-blue-500/80 tracking-widest uppercase mb-1 block">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
