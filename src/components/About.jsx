"use client";
import { useState, useEffect } from "react";

const TECH_CHIPS = [
  "Python",
  "Java",
  "Django",
  "React.js",
  "Docker",
  "Kubernetes",
  "ML",
];

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="font-serif bg-[#0a0a0a] text-[#f0ece4] overflow-hidden relative pt-28 md:pt-32">
      {/* Accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#c9a86c] to-transparent transition-opacity duration-1000 delay-200 ${loaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Decorative circles */}
      <div
        className={`absolute -right-44 -top-44 w-130 h-130 rounded-full border border-[#c9a86c]/15 pointer-events-none transition-opacity duration-1500 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute -right-28 -top-28 w-95 h-95 rounded-full border border-[#c9a86c]/08 pointer-events-none transition-opacity duration-1500 delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      />

      <div className="relative z-10 max-w-300 mx-auto px-6 md:px-12">
        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center min-h-[calc(100vh-130px)] pb-20">
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-900 delay-300 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
            >
              <div className="w-10 h-px bg-[#c9a86c]" />
              <span className="text-[11px] tracking-[0.3em] text-[#c9a86c] uppercase">
                Hi there, I'm
              </span>
            </div>

            {/* Name */}
            <h1
              className={`text-[clamp(42px,5vw,72px)] font-bold leading-none tracking-tight mb-6 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="block">ANANTHOJI</span>
              <span className="block text-[#c9a86c]">SAI CHARISH</span>
            </h1>

            {/* Role */}
            <p
              className={`text-[13px] tracking-[0.25em] text-[#f0ece4]/45 uppercase mb-12 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              Full Stack Developer&nbsp;·&nbsp;ML Engineer&nbsp;·&nbsp;Data
              Scientist
            </p>

            {/* Bio */}
            <p
              className={`text-base leading-[1.9] text-[#f0ece4]/60 max-w-130 italic border-l-2 border-[#c9a86c] pl-6 mb-14 transition-all duration-1000 delay-900 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              B.Tech graduate in AI &amp; ML with hands-on experience building
              end-to-end machine learning pipelines, REST APIs, and
              containerized fullstack applications. Proficient in Python, Java,
              Django, React.js, Docker, and Kubernetes.
            </p>

            {/* Tech chips */}
            <div
              className={`flex flex-wrap gap-2.5 transition-all duration-1000 delay-1100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              {TECH_CHIPS.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase border border-[#c9a86c]/30 text-[#f0ece4]/50 rounded-sm transition-all duration-300 cursor-default hover:border-[#c9a86c] hover:text-[#c9a86c]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`transition-all duration-1200 delay-600 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} relative max-w-95 mx-auto lg:mx-0 w-full`}
          >
            {/* Decorative frames */}
            <div className="absolute -inset-3 border border-[#c9a86c]/20 rounded-sm z-0" />
            <div className="absolute -inset-1.5 border border-[#c9a86c]/10 rounded-sm z-0" />

            <img
              src="/img/profile.jpg"
              alt="Ananthoji Sai Charish"
              className="w-full aspect-3/4 object-cover rounded-sm relative z-10"
              style={{ filter: "grayscale(20%) contrast(1.05)" }}
            />

            {/* Gold overlay */}
            <div className="absolute inset-0 rounded-sm z-20 pointer-events-none bg-linear-to-br from-[#c9a86c]/05 to-transparent" />

            {/* Tag */}
            <div className="absolute bottom-5 -left-5 z-30 bg-[#0a0a0a] border border-[#c9a86c]/30 px-4 py-2.5">
              <div className="text-[9px] tracking-[0.3em] text-[#c9a86c] uppercase">
                Available for
              </div>
              <div className="text-[12px] tracking-widest text-[#f0ece4] mt-0.5">
                Opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex flex-col items-center gap-2 transition-opacity duration-1000 delay-1500 mb-4 ${loaded ? "opacity-40" : "opacity-0"}`}
        >
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#c9a86c]">
            Scroll
          </span>
          <div className="w-px h-10 bg-linear-to-b from-[#c9a86c] to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </div>
  );
}
