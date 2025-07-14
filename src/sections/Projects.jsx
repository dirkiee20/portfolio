import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

// Project data with your projects
const projects = [
  {
    title: "Church Registration System",
    description: "A robust system for managing church member registrations, attendance, and events with an intuitive dashboard.",
  },
  {
    title: "Financial Tracker Web App",
    description: "A web application to track expenses, incomes, and visualize financial health with interactive charts.",
  },
  {
    title: "CRM System",
    description: "A customer relationship management platform to organize contacts, automate workflows, and boost productivity.",
  }
];

// Unique icons and colors for each project
const cardDesigns = [
  {
    color: "#06b6d4",
    icon: "📝",
    gradient: "from-cyan-500 to-cyan-900",
    border: "border-cyan-400/60"
  },
  {
    color: "#f59e42",
    icon: "💰",
    gradient: "from-amber-400 to-amber-700",
    border: "border-amber-400/60"
  },
  {
    color: "#a78bfa",
    icon: "📇",
    gradient: "from-purple-400 to-purple-900",
    border: "border-purple-400/60"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-5xl font-extrabold mb-16 text-cyan-400 text-center drop-shadow-lg tracking-tight">
        Projects
      </h2>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12">
        {projects.map((project, i) => {
          const design = cardDesigns[i % cardDesigns.length];
          return (
            <motion.div
              key={project.title}
              className={`w-[340px] h-[440px] flex flex-col justify-between items-center px-5 py-6 rounded-3xl bg-gradient-to-br ${design.gradient} shadow-2xl border-4 ${design.border} text-white relative overflow-visible`}
              style={{
                boxShadow: `0 8px 40px 0 ${design.color}33, 0 1.5px 8px 0 #0008`,
              }}
              initial={false}
              animate={false}
            >
              {/* Floating glow effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  boxShadow: `0 0 80px 10px ${design.color}55, 0 0 0 0 transparent`,
                  zIndex: 0,
                  filter: 'blur(8px)',
                  opacity: 0.5
                }}
              />
              {/* Card Design Badge at the top */}
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 z-10"
              >
                <div
                  className={`flex items-center gap-3 px-7 py-2 rounded-full shadow-lg border-2 ${design.border} bg-white/90 backdrop-blur text-lg font-extrabold`}
                  style={{ color: design.color, borderColor: design.color }}
                >
                  <span className="text-2xl">{design.icon}</span>
                  <span>
                    {design.icon === "📝" && "Registration"}
                    {design.icon === "💰" && "Finance"}
                    {design.icon === "📇" && "CRM"}
                  </span>
                </div>
              </div>
              <div
                className="flex flex-col items-center mt-10"
              >
                <span
                  className="text-5xl mb-4 drop-shadow-lg"
                  style={{
                    textShadow: `0 8px 32px ${design.color}99, 0 1.5px 8px #0008`
                  }}
                >
                  {design.icon}
                </span>
                <h3
                  className="text-2xl font-extrabold mb-3 text-white text-center drop-shadow"
                  style={{
                    textShadow: `0 4px 16px ${design.color}99, 0 1.5px 8px #0008`
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-100 text-center text-base mb-3 leading-relaxed"
                  style={{
                    textShadow: '0 2px 8px #0006'
                  }}
                >
                  {project.description}
                </p>
              </div>
              <div
                className="w-24 h-3 rounded-full mt-4"
                style={{
                  background: design.color,
                  opacity: 0.8,
                  boxShadow: `0 2px 16px 0 ${design.color}88`
                }}
              />
            </motion.div>
          );
        })}
      </div>
      <style>
        {`
        `}
      </style>
    </section>
  );
}
