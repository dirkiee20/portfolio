import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
// import EducationLaptop from '../canvas/EducationLaptop';

export default function Education() {
  const sectionRef = useRef();
  const educationRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(
      educationRef.current,
      { scale: 0.9, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)', delay: 0.6 }
    );
  }, []);

  const educationData = [
    {
      date: '2022 – ongoing',
      degree: "Bachelor of Science in Computer Science",
      school: "Surigao del Norte State university",
      location: "Surigao City, Surigao del Norte",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5c0-.795.356-1.548 1.016-2.078L12 14z" />
        </svg>
      ),
      color: 'text-cyan-400',
    },
    {
      date: '2020 – 2022',
      degree: "Senior High School - ICT Track",
      school: "Surigao State College of Technology - Del carmen Campus",
      location: "Del Carmen, Surigao del Norte",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      color: 'text-purple-400',
    },
    {
      date: '2015 – 2020',
      degree: "Junior High School",
      school: "Surigao State College of Technology - Del carmen Campus",
      location: "Del Carmen, Surigao del Norte",
      icon: (
        <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8v8H8z" />
        </svg>
      ),
      color: 'text-pink-400',
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-4 flex flex-col items-center bg-gradient-to-br from-[#0a1026] via-[#181c2f] to-[#0a1026] relative overflow-hidden"
    >
      <h2 className="text-5xl font-extrabold mb-16 text-cyan-400 drop-shadow-lg tracking-tight text-center relative z-10">
        Education
      </h2>
      <div className="w-full max-w-3xl mx-auto relative z-10">
        <div className="flex flex-col gap-y-6 items-center relative">
          {/* Vertical line behind all icons, from center of first to center of last */}
          <div className="absolute left-8 top-0 z-0 h-full flex flex-col items-center justify-center" style={{ width: '2px', height: 'calc(100% - 48px)' }}>
            <div className="w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 opacity-60 rounded-full" />
          </div>
          {educationData.map((education, idx) => (
            <div key={idx} className="flex flex-row items-center w-full relative z-10">
              {/* Timeline: icon */}
              <div className="flex flex-col items-center w-16 relative z-10">
                {/* Icon */}
                <div className={`w-8 h-8 rounded-full border-4 shadow-lg flex items-center justify-center bg-black/70 ${education.color}`}
                  style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                  <span className="text-xl">{education.icon}</span>
                </div>
              </div>
              {/* Card */}
              <div className="flex-1">
                <div
                  ref={el => (educationRef.current[idx] = el)}
                  className="relative bg-white/10 border border-cyan-400/20 rounded-2xl p-8 shadow-2xl backdrop-blur-md transition-all duration-500 group hover:bg-white/15 flex flex-col md:flex-row items-center gap-4 md:gap-6 min-h-[96px] mb-8"
                  style={{ boxShadow: '0 4px 32px 0 rgba(34,211,238,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}
                >
                  <div className="flex-shrink-0 flex flex-col items-center justify-center gap-1 mb-2 md:mb-0 md:mr-4">
                    <div className={`rounded-full bg-black/30 p-2 border-2 border-white/10 shadow-lg ${education.color} w-10 h-10 flex items-center justify-center`}>
                      <span className="text-lg">{education.icon}</span>
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wide ${education.color}`}>{education.date}</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 tracking-tight leading-snug">{education.degree}</h3>
                    <div className="text-cyan-100 font-semibold text-base mb-1 leading-tight">{education.school}</div>
                    <div className="text-cyan-200 text-xs sm:text-sm">{education.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 