"use client";
import { useState } from "react";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    company: "Epireum Consultancy & Services Oy",
    role: "Junior Software Engineer",
    type: "Full Time",
    from: "Jan 2026",
    to: "Present",
    location: "Remote",
    responsibilities: [
      "Collaborated in a 4-member team to build and maintain onboarding documentation using Docusaurus and core Linux commands for file system operations, permissions, and environment configuration.",
      "Containerized and deployed the application using Docker and Kubernetes — managing Pods, Services, and Ingress.",
      "Contributing to a full-stack data platform using React.js, Django, and REST APIs following agile development practices.",
    ],
  },
  {
    company: "Rinex Technologies",
    role: "Data Scientist",
    type: "Intern",
    from: "May 2024",
    to: "Jun 2024",
    location: "Remote",
    responsibilities: [
      "Built a content-based Movie Recommendation System on TMDB 5000 dataset using NLP techniques — text preprocessing, feature extraction, and cosine similarity to generate top-5 recommendations.",
      "Achieved top-5 recommendation accuracy using NLP-based feature engineering across 5,000 movie records.",
      "Worked with Python, Pandas, NumPy, and Scikit-learn for data preprocessing, feature engineering, and model evaluation on real-world datasets.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0d0d0d",
        minHeight: "100vh",
        color: "#f0ece4",
        padding: "120px 0 80px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "72px",
          }}
        >
          <div
            style={{ width: "40px", height: "1px", background: "#c9a86c" }}
          />
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c9a86c",
            }}
          >
            Experience
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(201,168,108,0.1)",
            }}
          />
        </div>

        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            margin: "0 0 64px",
            color: "#f0ece4",
            lineHeight: 1.1,
          }}
        >
          Where I've
          <br />
          <span style={{ color: "#c9a86c" }}>worked.</span>
        </h2>

        {/* Cards */}
        <div
          style={{
            overflow: "hidden",
          }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            marginTop: "40px",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(240,236,228,0.2)",
            textTransform: "uppercase",
            textAlign: "right",
          }}
        >
          {experiences.length} positions &nbsp;·&nbsp;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
