"use client";
import { useState, useEffect } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#f0ece4",
        overflow: "hidden",
        position: "relative",
        paddingTop: "8rem",
      }}
    >
      {/* Accent line top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #c9a86c, transparent)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 0.2s",
        }}
      />

      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          right: "-180px",
          top: "-180px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,108,0.15)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 0.5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,108,0.08)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 0.7s",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Hero section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "80px",
            alignItems: "center",
            minHeight: "calc(100vh - 130px)",
            paddingBottom: "80px",
          }}
        >
          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "32px",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateX(-20px)",
                transition: "all 0.9s ease 0.3s",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#c9a86c" }}
              />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  color: "#c9a86c",
                  textTransform: "uppercase",
                }}
              >
                Hi there, I'm
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(42px, 5vw, 72px)",
                fontWeight: "700",
                lineHeight: "1.0",
                letterSpacing: "-0.02em",
                margin: "0 0 24px",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(30px)",
                transition: "all 1s ease 0.5s",
              }}
            >
              <span style={{ display: "block" }}>ANANTHOJI</span>
              <span style={{ display: "block", color: "#c9a86c" }}>
                SAI CHARISH
              </span>
            </h1>

            {/* Role */}
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "0.25em",
                color: "rgba(240,236,228,0.45)",
                textTransform: "uppercase",
                marginBottom: "48px",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(20px)",
                transition: "all 1s ease 0.7s",
              }}
            >
              Full Stack Developer &nbsp;·&nbsp; ML Engineer &nbsp;·&nbsp; Data
              Scientist
            </p>

            {/* Bio */}
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.9",
                color: "rgba(240,236,228,0.6)",
                maxWidth: "520px",
                fontStyle: "italic",
                borderLeft: "2px solid #c9a86c",
                paddingLeft: "24px",
                marginBottom: "60px",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(20px)",
                transition: "all 1s ease 0.9s",
              }}
            >
              B.Tech graduate in AI &amp; ML with hands-on experience building
              end-to-end machine learning pipelines, REST APIs, and
              containerized fullstack applications. Proficient in Python, Java,
              Django, React.js, Docker, and Kubernetes.
            </p>

            {/* Tech chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(20px)",
                transition: "all 1s ease 1.1s",
              }}
            >
              {[
                "Python",
                "Java",
                "Django",
                "React.js",
                "Docker",
                "Kubernetes",
                "ML",
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "6px 16px",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(201,168,108,0.3)",
                    color: "rgba(240,236,228,0.5)",
                    borderRadius: "2px",
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#c9a86c";
                    e.target.style.color = "#c9a86c";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(201,168,108,0.3)";
                    e.target.style.color = "rgba(240,236,228,0.5)";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateX(30px)",
              transition: "all 1.2s ease 0.6s",
              position: "relative",
            }}
          >
            {/* Decorative frame */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                border: "1px solid rgba(201,168,108,0.2)",
                borderRadius: "4px",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-6px",
                border: "1px solid rgba(201,168,108,0.1)",
                borderRadius: "4px",
                zIndex: 0,
              }}
            />

            <img
              src="/img/profile.jpg"
              alt="Ananthoji Sai Charish"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                borderRadius: "4px",
                display: "block",
                position: "relative",
                zIndex: 1,
                filter: "grayscale(20%) contrast(1.05)",
              }}
            />

            {/* Gold tint overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "4px",
                zIndex: 2,
                background:
                  "linear-gradient(160deg, rgba(201,168,108,0.05) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* Tag */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "-20px",
                zIndex: 3,
                background: "#0a0a0a",
                border: "1px solid rgba(201,168,108,0.3)",
                padding: "10px 16px",
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  color: "#c9a86c",
                  textTransform: "uppercase",
                }}
              >
                Available for
              </div>
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  color: "#f0ece4",
                  marginTop: "2px",
                }}
              >
                Opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: loaded ? 0.4 : 0,
            transition: "opacity 1s ease 1.5s",
            margin: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c9a86c",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #c9a86c, transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
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
