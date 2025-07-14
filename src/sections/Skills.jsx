import React from 'react';
import Marquee from "react-fast-marquee";

const skillIcons = [
  { icon: "🟨", label: "JavaScript" },
  { icon: "🔷", label: "TypeScript" },
  { icon: "⚛️", label: "React" },
  { icon: "🌐", label: "Three.js" },
  { icon: "🎞️", label: "GSAP" },
  { icon: "🌬️", label: "Tailwind CSS" },
  { icon: "🟧", label: "HTML5" },
  { icon: "🟦", label: "CSS3" },
  { icon: "🟩", label: "Node.js" },
  { icon: "🐍", label: "Python" },
  { icon: "🖼️", label: "WebGL" },
  { icon: "🎨", label: "UI/UX" },
  { icon: "⚡", label: "Vite" },
  { icon: "🎬", label: "Framer Motion" },
  { icon: "🔤", label: "Google Fonts" },
  { icon: "🔧", label: "PostCSS" },
  { icon: "🧹", label: "ESLint" },
  { icon: "🔁", label: "Autoprefixer" },
  { icon: "🔺", label: "Git" },
  { icon: "💻", label: "Vercel" },
  { icon: "📦", label: "GitHub Pages" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">Skills</h2>
      <Marquee gradient={false} speed={80} pauseOnHover={true} className="w-full mb-12">
        {skillIcons.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center w-24 mx-8">
            <span className="text-6xl mb-2" title={label}>{icon}</span>
            <span className="text-base text-cyan-200 text-center font-semibold">{label}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
