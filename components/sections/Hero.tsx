"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";
import { FlipWords } from "../ui/flip-words";
import { HeroBackground } from "@/components/HeroBackground";


// 1. Define the Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This handles the timing for ALL items
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// --- Main Hero Component ---
function Hero() {
  return (
    <section className="relative group flex flex-col justify-center items-center overflow-hidden bg-black/10 px-4 pt-28 pb-10">
      
      <HeroBackground />

      {/* 3. Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-20 mx-auto max-w-5xl text-center"
      >
        {/* Badge / Pill */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Main Heading with Word Rotate */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Crafting Exceptional <br className="hidden sm:block" />
          <span className="inline-block min-w-[18rem]">
            <FlipWords
              className="text-blue-500 text-4xl sm:text-6xl md:text-7xl"
              words={[
                "Modern Websites",
                "Interactive UIs",
                "Digital Products",
                "Web Experiences",
              ]}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I bridge the gap between design and engineering. Specializing in{" "}
          <span className="text-zinc-200 font-medium">React & Next.js</span>, I
          build pixel-perfect, accessible, and performant interfaces that look
          great on any device.
        </motion.p>

        {/* Buttons / CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/#projects">
            <ShimmerButton
              className="shadow-2xl h-12 px-8"
              background="#000000"
              shimmerColor="#3b82f6"
              shimmerSize="0.1em"
            >
              <span className="flex items-center gap-2 text-white font-medium">
                View My Work <ArrowRight className="w-4 h-4 text-blue-400" />
              </span>
            </ShimmerButton>
          </Link>

          <button className="h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all flex items-center gap-2 group">
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-all duration-300" />
            Download CV
          </button>
        </motion.div>

        {/* Social Proof / Links */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center justify-center gap-6 text-zinc-500"
        >
          <Link
            aria-label="GitHub Profile"
            href="https://github.com/Muhammad-Saad-Riaz"
            target="_blank"
            className="hover:text-white transition-colors"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            aria-label="Linkedin Profile"
            href="https://www.linkedin.com/in/muhammad-saad-riaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            aria-label="Email"
            href="mailto:msaadriaz11@gmail.com"
            className="hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
    // </WarpBackground>
  );
}
export default Hero;
