"use client";
import { useState } from "react";

export function SkillPill({ skill, accent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        border: `1px solid ${hovered ? accent : "rgba(240,236,228,0.08)"}`,
        borderRadius: "3px",
        background: hovered
          ? `rgba(${accent
              .match(/[\d.]+/g)
              .slice(0, 3)
              .join(",")},0.06)`
          : "rgba(240,236,228,0.02)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
    >
      <img
        src={`${skill.skillIcon}`}
        alt={skill.skillName}
        width="18"
        height="18"
        style={{
          filter: hovered ? "none" : "grayscale(80%) brightness(0.6)",
          transition: "filter 0.3s ease",
        }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <span
        style={{
          fontSize: "11px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: hovered ? "#f0ece4" : "rgba(240,236,228,0.4)",
          fontFamily: "'Georgia', serif",
          transition: "color 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {skill.skillName}
      </span>
    </div>
  );
}

export function CategoryRow({ category, index, categoryAccents }) {
  const accent = categoryAccents[index % categoryAccents.length];
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        padding: "52px 0",
        borderBottom: "1px solid rgba(240,236,228,0.05)",
        position: "relative",
      }}
    >
      {/* Ambient glow behind row */}
      <div
        style={{
          position: "absolute",
          [isEven ? "left" : "right"]: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent.slice(0, 7)}1a 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: isEven ? "row" : "row-reverse",
          alignItems: "center",
          gap: "64px",
          position: "relative",
        }}
      >
        {/* Category label */}
        <div
          style={{
            minWidth: "200px",
            textAlign: isEven ? "right" : "left",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "8px",
              fontFamily: "'Georgia', serif",
            }}
          >
            0{index + 1}
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
              color: "#f0ece4",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.2,
            }}
          >
            {category.title}
          </h3>
          <div
            style={{
              marginTop: "12px",
              height: "1px",
              background: `linear-gradient(${isEven ? "to left" : "to right"}, ${accent}, transparent)`,
            }}
          />
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: "1px",
            alignSelf: "stretch",
            minHeight: "60px",
            background: `linear-gradient(to bottom, transparent, ${accent}, transparent)`,
            flexShrink: 0,
          }}
        />

        {/* Skills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            flex: 1,
            justifyContent: isEven ? "flex-start" : "flex-end",
          }}
        >
          {category.skills.map((skill) => (
            <SkillPill key={skill.skillName} skill={skill} accent={accent} />
          ))}
        </div>
      </div>
    </div>
  );
}
