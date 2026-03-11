"use client";
import { useState, useEffect } from "react";
import ResBtn from "./ResBtn";

const details = ["About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 50) {
        setActive("About");
        return;
      }

      for (const item of [...details].reverse()) {
        const ele = document.getElementById(item.toLowerCase());
        if (ele && window.scrollY >= ele.offsetTop - 120) {
          setActive(item);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (item) => {
    const ele = document.getElementById(item.toLowerCase());
    if (ele) {
      ele.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        fontFamily: "'Georgia', serif",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,108,0.15)"
          : "1px solid transparent",
        transition: "all 0.5s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <div style={{ position: "relative" }}>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              letterSpacing: "0.12em",
              color: "#f0ece4",
              textTransform: "uppercase",
            }}
          >
            A<span style={{ color: "#c9a86c" }}>S</span>C
          </span>

          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, #c9a86c, transparent)",
            }}
          />
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {details.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 16px",
                position: "relative",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: active === item ? "#c9a86c" : "rgba(240,236,228,0.45)",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (active !== item)
                  e.currentTarget.style.color = "rgba(240,236,228,0.8)";
              }}
              onMouseLeave={(e) => {
                if (active !== item)
                  e.currentTarget.style.color = "rgba(240,236,228,0.45)";
              }}
            >
              {item}

              {active === item && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "16px",
                    right: "16px",
                    height: "1px",
                    background: "#c9a86c",
                    animation: "slideIn 0.3s ease forwards",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <ResBtn />
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </nav>
  );
}
