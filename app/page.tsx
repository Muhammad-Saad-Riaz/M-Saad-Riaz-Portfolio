"use client";
import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { 
  ssr: false,
  loading: () => <div className="h-20" /> // Placeholder so the layout doesn't "jump"
});

// Lazy load everything else
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });
export default function Home() {
  return (
    <main className="font-sans min-h-screen bg-black text-white selection:bg-blue-500/30">
      <section id="hero">
        <Hero/>
      </section>

      <TechStack/>

      <section id="projects" style={{ contentVisibility: 'auto' }}>
        <Projects/>
      </section>

      <section id="about" style={{ contentVisibility: 'auto' }}>
        <About/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section>
    </main>
  );
}
