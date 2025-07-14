import React from 'react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: '🐙',
    color: 'bg-gray-800',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: '💼',
    color: 'bg-blue-700',
  },
  {
    label: 'Email',
    href: 'mailto:your@email.com',
    icon: '✉️',
    color: 'bg-cyan-700',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 flex flex-col items-center bg-gradient-to-br from-cyan-900/40 via-gray-900/80 to-cyan-950/60 relative overflow-hidden">
      <h2 className="text-5xl font-extrabold mb-12 text-cyan-400 drop-shadow-lg tracking-tight text-center">Get in Touch</h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-y-8 md:gap-12 items-stretch justify-center mx-auto">
        <form className="flex-1 min-w-[240px] max-w-xs md:max-w-xl glass-effect bg-white/10 border border-cyan-400/30 rounded-2xl px-6 md:px-10 py-4 shadow-2xl flex flex-col gap-4 backdrop-blur-md mx-auto">
          <p className="text-lg md:text-xl font-semibold text-cyan-200 mb-6 text-center">
            For business inquiries, collaborations, or questions, please fill out the form below.
          </p>
          <input className="bg-gray-900/80 rounded-lg px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-cyan-200/60" type="text" placeholder="Your Name" required />
          <input className="bg-gray-900/80 rounded-lg px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-cyan-200/60" type="email" placeholder="Your Email" required />
          <textarea className="bg-gray-900/80 rounded-lg px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder:text-cyan-200/60" rows={5} placeholder="Your Message" required />
          <button className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl shadow-lg font-bold text-lg transition" type="submit">
            Send Message
          </button>
        </form>
        {/* Vertical Separator Line */}
        <div className="hidden md:block w-px h-96 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent mx-8"></div>
        {/* Right: Contact Info and Socials */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 h-full min-h-[400px] mt-0 md:mt-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 w-full max-w-xs justify-center items-start">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
              <span className="text-cyan-100 text-base md:text-xl font-semibold">dlabiaga@ssct.edu.ph</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.22.72 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.04.35 2.13.59 3.26.72A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-cyan-100 text-base md:text-xl font-semibold">09309419547</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-cyan-100 text-base md:text-xl font-semibold">Del Carmen, Surigao del Norte</span>
            </div>
          </div>
          {/* Socials (existing) */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center justify-center ml-0 mt-8 md:ml-16 md:mt-0 w-full md:w-auto">
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 md:w-20 md:h-20 flex flex-col items-center justify-center rounded-2xl shadow-lg text-3xl md:text-4xl ${social.color} hover:bg-cyan-500 hover:text-white transition group`}
                aria-label={social.label}
              >
                <span>{social.icon}</span>
                <span className="text-xs mt-2 text-cyan-100 group-hover:text-white font-semibold tracking-wide">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full mt-16 flex flex-col items-center justify-center text-cyan-100 text-sm opacity-80 z-20 text-center">
        <div className="mb-1">&copy; {new Date().getFullYear()} Developed by: Dirk Labiaga. All rights reserved.</div>
      </footer>
    </section>
  );
}
