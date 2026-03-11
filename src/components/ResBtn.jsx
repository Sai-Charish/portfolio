"use client";

import React from "react";

export default function ResBtn() {
  return (
    <a
      href="/resume.pdf"
      download={"resume.pdf"}
      style={{
        padding: "9px 22px",
        fontSize: "10px",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        cursor: "pointer",
        fontFamily: "inherit",
        color: "#c9a86c",
        background: "transparent",
        border: "1px solid rgba(201,168,108,0.5)",
        borderRadius: "2px",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#c9a86c";
        e.currentTarget.style.color = "#0a0a0a";
        e.currentTarget.style.borderColor = "#c9a86c";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "#c9a86c";
        e.currentTarget.style.borderColor = "rgba(201,168,108,0.5)";
      }}
    >
      Résumé
    </a>
  );
}
