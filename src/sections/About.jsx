import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import profileImg from '../assets/profile.png';

export default function About() {
  const sectionRef = useRef();
  const skillsRef = useRef([]);
  const linksRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(
      skillsRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.7)', delay: 0.7 }
    );
    gsap.fromTo(
      linksRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', delay: 1.1 }
    );
  }, []);

  const skills = [
    "React",
    "Three.js",
    "GSAP",
    "Tailwind CSS",
    "UI/UX",
    "WebGL"
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: (
        <svg width="24" height="24" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.44 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/>
        </svg>
      )
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: (
        <svg width="24" height="24" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
        </svg>
      )
    },
    {
      label: "Email",
      href: "mailto:your@email.com",
      icon: (
        <svg width="24" height="24" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
          <path d="M12 13.065l-11.99-8.065h23.98l-11.99 8.065zm0 2.935l-12-8.065v13.065h24v-13.065l-12 8.065z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 flex flex-col items-center bg-gradient-to-b from-transparent to-[#151030]"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 tracking-tight text-center drop-shadow-lg">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl w-full">
        {/* Photo */}
        <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-2xl border-8 border-cyan-400 bg-gray-900 flex-shrink-0 group transition-transform duration-500 hover:scale-105 mb-4 md:mb-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ filter: 'brightness(0.97) contrast(1.1)' }}
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cyan-700 text-white text-base px-5 py-2 rounded-full shadow-lg opacity-90 font-semibold tracking-wide animate-pulse">
            Developer
          </span>
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-spin-slow pointer-events-none" style={{ borderTopColor: 'transparent' }} />
        </div>
        {/* Info and Who am I */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <span className="text-xl font-bold text-cyan-300 mb-2 md:mb-4">Who am I?</span>
          <p className="text-xl text-gray-200 mb-6 text-justify leading-relaxed">
            I'm a curious and hands-on developer who loves bringing ideas to life
            through creative tech—from building practical systems with Python to
            crafting interactive websites with React and Three.js.
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
            {skills.map((skill, i) => (
              <span
                key={skill}
                ref={el => (skillsRef.current[i] = el)}
                className="bg-cyan-700/80 px-3 py-1 rounded text-sm font-semibold shadow text-white border border-cyan-500 hover:bg-cyan-600 transition-all duration-300 cursor-pointer"
                style={{ letterSpacing: '0.02em' }}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-4 justify-center md:justify-start mt-2">
            {socials.map((social, i) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={el => (linksRef.current[i] = el)}
                className="flex items-center text-cyan-400 hover:text-cyan-200 transition text-base font-semibold drop-shadow-lg gap-1"
                aria-label={social.label}
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .animate-spin-slow {
            animation: spin 3.5s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </section>
  );
}
