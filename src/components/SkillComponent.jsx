"use client";
import { useState } from "react";

export function SkillPill({ skill, accent }) {
  const [hovered, setHovered] = useState(false);

  // Extract hex from accent (e.g. "#c9a86cb3" → "#c9a86c")
  const accentHex = accent.slice(0, 7);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 px-4.5 py-2.5 border rounded-sm transition-all duration-300 cursor-default"
      style={{
        borderColor: hovered ? accentHex : "rgba(240,236,228,0.08)",
        background: hovered ? `${accentHex}0f` : "rgba(240,236,228,0.02)",
      }}
    >
      <img
        src={skill.skillIcon}
        alt={skill.skillName}
        width={18}
        height={18}
        className="transition-all duration-300"
        style={{ filter: hovered ? "none" : "grayscale(80%) brightness(0.6)" }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <span
        className="text-[11px] tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-300"
        style={{ color: hovered ? "#f0ece4" : "rgba(240,236,228,0.4)" }}
      >
        {skill.skillName}
      </span>
    </div>
  );
}

export function CategoryRow({ category, index, categoryAccents }) {
  const accent = categoryAccents[index % categoryAccents.length];
  const accentHex = accent.slice(0, 7);
  const isEven = index % 2 === 0;

  return (
    <div className="py-12 md:py-13 border-b border-[#f0ece4]/05 relative">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-75 h-75 rounded-full pointer-events-none"
        style={{
          [isEven ? "left" : "right"]: 0,
          background: `radial-gradient(circle, ${accentHex}1a 0%, transparent 50%)`,
        }}
      />

      <div
        className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 relative
          ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* Category label */}
        <div
          className={`md:min-w-50 ${isEven ? "md:text-right" : "md:text-left"}`}
        >
          <div
            className="text-[9px] tracking-[0.35em] uppercase mb-2"
            style={{ color: accentHex }}
          >
            0{index + 1}
          </div>
          <h3 className="m-0 text-[18px] md:text-[20px] font-bold tracking-tight text-[#f0ece4] leading-[1.2]">
            {category.title}
          </h3>
          <div
            className="mt-3 h-px"
            style={{
              background: `linear-gradient(${isEven ? "to left" : "to right"}, ${accentHex}, transparent)`,
            }}
          />
        </div>

        {/* Vertical divider — hidden on mobile */}
        <div
          className="hidden md:block w-px self-stretch min-h-15 shrink-0"
          style={{
            background: `linear-gradient(to bottom, transparent, ${accentHex}, transparent)`,
          }}
        />

        {/* Skills */}
        <div
          className={`flex flex-wrap gap-2.5 flex-1 ${isEven ? "justify-start" : "md:justify-end"}`}
        >
          {category.skills.map((skill) => (
            <SkillPill key={skill.skillName} skill={skill} accent={accent} />
          ))}
        </div>
      </div>
    </div>
  );
}
