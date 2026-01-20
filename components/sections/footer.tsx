"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    { name: "Email", icon: Mail, href: "mailto:msaadriaz11@gmail.com", hover: "hover:text-red-500" },
    { name: "GitHub", icon: Github, href: "https://github.com/Muhammad-Saad-Riaz", hover: "hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/muhammad-saad-riaz", hover: "hover:text-blue-600" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/+923264737989", hover: "hover:text-green-500" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/profile.php?id=61581438106978", hover: "hover:text-blue-400" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Section: Navigation & Brand */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Muhammad Saad Riaz
            </h3>
            <p className="text-zinc-500 text-sm mt-1">
              Frontend Developer • Lahore, PK
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Back to Top
            <div className="p-2 bg-zinc-900 border border-white/10 rounded-full group-hover:border-white/30 transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full mb-8" />

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright Text */}
          <div className="text-zinc-600 text-sm text-center md:text-left">
            <p>© {year} All rights reserved.</p>
            <p className="text-xs mt-1">Built with Next.js, Tailwind & Framer Motion.</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className={`p-2 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 transition-all duration-300 hover:scale-110 ${social.hover}`}
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative border-t border-white/5 bg-black py-12 overflow-hidden">
//       {/* Subtle background glow to match Hero */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
//           {/* Left Side: Brand/Copyright */}
//           <div className="flex flex-col items-center md:items-start gap-2">
//             <Link href="/" className="text-xl font-bold tracking-tighter text-white">
//               MSR<span className="text-blue-500">.</span>
//             </Link>
//             <p className="text-sm text-zinc-500">
//               © {currentYear} Muhammad Saad Riaz. Built with Next.js & Framer Motion.
//             </p>
//           </div>

//           {/* Center: Navigation Links */}
//           <nav className="flex items-center gap-6">
//             {["Projects", "About", "Contact"].map((item) => (
//               <Link
//                 key={item}
//                 href={`/#${item.toLowerCase()}`}
//                 className="text-sm text-zinc-400 hover:text-white transition-colors"
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side: Socials & Back to Top */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-4 pr-4 border-r border-white/10">
//               <Link href="https://github.com/Muhammad-Saad-Riaz" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
//                 <Github size={18} />
//               </Link>
//               <Link href="https://linkedin.com/in/muhammad-saad-riaz" target="_blank" className="text-zinc-500 hover:text-blue-500 transition-colors">
//                 <Linkedin size={18} />
//               </Link>
//               <Link href="mailto:msaadriaz11@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
//                 <Mail size={18} />
//               </Link>
//             </div>
            
//             <motion.button
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={scrollToTop}
//               className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
//               aria-label="Back to top"
//             >
//               <ArrowUp size={18} />
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }