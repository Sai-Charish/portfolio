"use client";
import { useState } from "react";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <line x1="0" y1="14" x2="14" y2="0" stroke="#c9a86c" strokeWidth="1.2" />
    <polyline
      points="6,0 14,0 14,8"
      stroke="#c9a86c"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

const PLACEHOLDER_COLORS = ["#1a1508", "#081510", "#080d18", "#150810"];

export function ProjectComponent({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const bgColor = PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border rounded-sm overflow-hidden flex flex-col bg-[#0f0f0f] transition-all duration-400"
      style={{
        borderColor: hovered
          ? "rgba(201,168,108,0.4)"
          : "rgba(201,168,108,0.12)",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Image area */}
      <div
        className="h-45 relative overflow-hidden border-b border-[#c9a86c]/08"
        style={{ background: bgColor }}
      >
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              className="absolute inset-0 opacity-40"
            >
              <defs>
                <pattern
                  id={`grid-${index}`}
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="rgba(201,168,108,0.15)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
            </svg>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a86c]/30 relative">
              Preview
            </span>
          </div>
        )}

        {/* Index badge */}
        <div className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-[#c9a86c]/50">
          0{index + 1}
        </div>

        {/* Date badge */}
        <div className="absolute top-3.5 right-3.5 px-2.5 py-1 border border-[#c9a86c]/20 text-[9px] tracking-[0.2em] uppercase text-[#f0ece4]/35 rounded-sm bg-[#0a0a0a]/60 backdrop-blur-sm">
          {project.from} — {project.to}
        </div>

        {/* Hover overlay */}
        {project.link && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]/70 transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 border border-[#c9a86c] text-[#c9a86c] text-[10px] tracking-[0.25em] uppercase no-underline rounded-sm hover:bg-[#c9a86c] hover:text-[#0a0a0a] transition-all duration-300"
            >
              View Project
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex-1 flex flex-col gap-4">
        {/* Title row */}
        <div className="flex justify-between items-start">
          <h3 className="m-0 text-[17px] font-bold tracking-tight text-[#f0ece4] leading-[1.3] flex-1">
            {project.title}
          </h3>
          {project.link && (
            <span
              className="ml-3 mt-0.5 transition-opacity duration-300"
              style={{ opacity: hovered ? 1 : 0.3 }}
            >
              <ArrowIcon />
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-[#c9a86c]/25 to-transparent" />

        {/* Description */}
        <ul className="m-0 p-0 list-none flex flex-col gap-2.5 flex-1">
          {project.description.map((d, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-2 w-0.75 h-0.75 rounded-full bg-[#c9a86c] shrink-0" />
              <p className="m-0 text-[13px] leading-[1.8] text-[#f0ece4]/50 italic">
                {d}
              </p>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[9px] tracking-[0.18em] uppercase border border-[#c9a86c]/20 text-[#f0ece4]/40 rounded-sm transition-all duration-300 hover:border-[#c9a86c] hover:text-[#c9a86c]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
