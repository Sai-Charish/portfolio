"use client";
import { useState } from "react";

export function SocialLink({ social }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 px-6 py-5 border rounded-sm no-underline transition-all duration-300"
      style={{
        borderColor: hovered
          ? "rgba(201,168,108,0.5)"
          : "rgba(240,236,228,0.07)",
        background: hovered ? "rgba(201,168,108,0.04)" : "transparent",
      }}
    >
      <img
        src={social.icon}
        alt={social.label}
        width={20}
        height={20}
        className="transition-all duration-300"
        style={{ filter: hovered ? "none" : "grayscale(100%) brightness(0.5)" }}
      />

      <div className="flex-1">
        <div
          className="text-[9px] tracking-[0.3em] uppercase mb-1 transition-colors duration-300"
          style={{ color: hovered ? "#c9a86c" : "rgba(240,236,228,0.3)" }}
        >
          {social.label}
        </div>
        <div
          className="text-[13px] tracking-[0.03em] transition-colors duration-300"
          style={{ color: hovered ? "#f0ece4" : "rgba(240,236,228,0.5)" }}
        >
          {social.handle}
        </div>
      </div>

      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0, transform: "rotate(-45deg)" }}
      >
        <line
          x1="0"
          y1="12"
          x2="12"
          y2="0"
          stroke="#c9a86c"
          strokeWidth="1.2"
        />
        <polyline
          points="5,0 12,0 12,7"
          stroke="#c9a86c"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </a>
  );
}
