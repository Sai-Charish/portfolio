"use client";
import { useState } from "react";

export function SocialLink({ social, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "20px 24px",
        border: `1px solid ${hovered ? "rgba(201,168,108,0.5)" : "rgba(240,236,228,0.07)"}`,
        borderRadius: "3px",
        background: hovered ? "rgba(201,168,108,0.04)" : "transparent",
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={`${social.icon}`}
        alt={social.label}
        width="20"
        height="20"
        style={{
          filter: hovered ? "none" : "grayscale(100%) brightness(0.5)",
          transition: "filter 0.3s ease",
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: hovered ? "#c9a86c" : "rgba(240,236,228,0.3)",
            fontFamily: "'Georgia', serif",
            marginBottom: "3px",
            transition: "color 0.3s",
          }}
        >
          {social.label}
        </div>
        <div
          style={{
            fontSize: "13px",
            color: hovered ? "#f0ece4" : "rgba(240,236,228,0.5)",
            fontFamily: "'Georgia', serif",
            letterSpacing: "0.03em",
            transition: "color 0.3s",
          }}
        >
          {social.handle}
        </div>
      </div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          transform: "rotate(-45deg)",
        }}
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
