// import { Navbar } from "@/components/sections/navbar";
// import Footer from "@/components/sections/footer";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className="bg-black text-white antialiased">
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Saad Riaz | Frontend Developer",
  description:
    "Frontend Developer specializing in modern, animated, and high-performance web experiences using React, Next.js, Tailwind CSS, and Framer Motion.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Engineer",
    "Web Developer Portfolio",
    "SaaS Frontend",
  ],
  authors: [{ name: "Muhammad Saad Riaz" }],
  openGraph: {
    title: "Muhammad Saad Riaz | Frontend Developer",
    description:
      "Crafting modern, interactive, and performance-focused web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="relative min-h-screen bg-black text-white antialiased overflow-x-hidden">
        
        {/* Global Background Layer */}
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Soft Glow */}
          <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
        </div>

        {/* App Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
