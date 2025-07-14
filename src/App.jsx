import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
 import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [showMobilePortfolio, setShowMobilePortfolio] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.innerWidth < 768) return; // Only for desktop
      if (window.scrollY < 40) {
        setShowNav(true);
        lastScrollY = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // Scroll down
      } else {
        setShowNav(true); // Scroll up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleMobileScroll = () => {
      if (window.innerWidth >= 768) return;
      setShowMobilePortfolio(window.scrollY < 40);
    };
    window.addEventListener('scroll', handleMobileScroll);
    return () => window.removeEventListener('scroll', handleMobileScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 text-lg font-medium bg-transparent hidden md:flex transition-transform duration-300 ${showNav ? '' : '-translate-y-full'}`}>
        <div className="text-xl font-bold font-[Poppins,sans-serif] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-wide drop-shadow-[0_2px_24px_rgba(34,211,238,0.5)] absolute top-6 left-6 md:static" style={{ fontFamily: "'Poppins', sans-serif" }}>Portfolio</div>
        <div className="flex gap-10">
          {[
            { label: 'Home', href: '#hero' },
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Education', href: '#education' },
            { label: 'Contact', href: '#contact' }
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-[Poppins,sans-serif] text-white transition-colors duration-300 px-2 py-1
                before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:transition-all before:duration-300
                hover:text-cyan-400 hover:before:w-full"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      {/* Mobile Portfolio text only */}
      {showMobilePortfolio && (
        <div className="md:hidden fixed top-6 left-6 z-50 text-xl font-bold font-[Poppins,sans-serif] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-wide drop-shadow-[0_2px_24px_rgba(34,211,238,0.5)] pointer-events-none select-none" style={{ fontFamily: "'Poppins', sans-serif" }}>Portfolio</div>
      )}
      <main className="pt-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
