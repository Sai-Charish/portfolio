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

export function ProjectComponent({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const placeholderColors = ["#1a1508", "#081510", "#080d18", "#150810"];
  const bgColor = placeholderColors[index % placeholderColors.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid rgba(201,168,108,0.12)",
        borderRadius: "4px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition:
          "border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
        borderColor: hovered
          ? "rgba(201,168,108,0.4)"
          : "rgba(201,168,108,0.12)",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
        background: "#0f0f0f",
      }}
    >
      {/* Image / Placeholder area */}
      <div
        style={{
          height: "180px",
          background: bgColor,
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(201,168,108,0.08)",
        }}
      >
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Grid pattern */}
            <svg
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0, opacity: 0.4 }}
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
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(201,168,108,0.3)",
                fontFamily: "'Georgia', serif",
                position: "relative",
              }}
            >
              Preview
            </span>
          </div>
        )}

        {/* Index badge */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(201,168,108,0.5)",
            fontFamily: "'Georgia', serif",
          }}
        >
          0{index + 1}
        </div>

        {/* Date badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            padding: "4px 10px",
            border: "1px solid rgba(201,168,108,0.2)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(240,236,228,0.35)",
            borderRadius: "2px",
            fontFamily: "'Georgia', serif",
            background: "rgba(10,10,10,0.6)",
            backdropFilter: "blur(4px)",
          }}
        >
          {project.from} — {project.to}
        </div>

        {/* Hover overlay with link */}
        {project.link && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10,10,10,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 24px",
                border: "1px solid #c9a86c",
                color: "#c9a86c",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'Georgia', serif",
                borderRadius: "2px",
              }}
            >
              View Project
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "28px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Title row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "17px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
              color: "#f0ece4",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.3,
              flex: 1,
            }}
          >
            {project.title}
          </h3>
          {project.link && (
            <span
              style={{
                marginLeft: "12px",
                marginTop: "2px",
                opacity: hovered ? 1 : 0.3,
                transition: "opacity 0.3s",
              }}
            >
              <ArrowIcon />
            </span>
          )}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(201,168,108,0.25), transparent)",
          }}
        />

        {/* Description */}
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
          }}
        >
          {project.description.map((d, i) => (
            <li
              key={i}
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <span
                style={{
                  marginTop: "8px",
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "#c9a86c",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: "1.8",
                  color: "rgba(240,236,228,0.5)",
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                }}
              >
                {d}
              </p>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "4px 10px",
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,108,0.2)",
                color: "rgba(240,236,228,0.4)",
                borderRadius: "2px",
                fontFamily: "'Georgia', serif",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#c9a86c";
                e.target.style.color = "#c9a86c";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(201,168,108,0.2)";
                e.target.style.color = "rgba(240,236,228,0.4)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
