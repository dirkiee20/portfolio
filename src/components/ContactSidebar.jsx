import React from "react";

export default function ContactSidebar() {
  return (
    <div className="fixed top-1/3 left-6 z-50 flex flex-col gap-6">
      {/* Email */}
      <div className="flex items-center gap-3 bg-gray-900/80 rounded-xl px-4 py-3 shadow-lg">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
        <span className="text-cyan-100 text-sm">dirkpepitolabiaga20@gmail.com</span>
      </div>
      {/* Phone */}
      <div className="flex items-center gap-3 bg-gray-900/80 rounded-xl px-4 py-3 shadow-lg">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.22.72 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.04.35 2.13.59 3.26.72A2 2 0 0 1 22 16.92z"/></svg>
        <span className="text-cyan-100 text-sm">09309419547</span>
      </div>
      {/* Location */}
      <div className="flex items-center gap-3 bg-gray-900/80 rounded-xl px-4 py-3 shadow-lg">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span className="text-cyan-100 text-sm">Del Carmen, Surigao del Norte</span>
      </div>
    </div>
  );
} 