"use client";
import { useState } from "react";
import { ProjectComponent } from "./ProjectComponent";

const projects = [
  {
    title: "Intelligent Airline Pricing System",
    img: "/img/intelligent_flight_pricing.png",
    link: "https://github.com/Sai-Charish/Intelligence-flight-system",
    description: [
      "Building a full-stack AI web application that predicts optimal airline ticket prices using a regression model trained on historical booking and demand data.",
      "Developing Django REST APIs with PostgreSQL and a React + Tailwind frontend for real-time price predictions and demand analysis.",
    ],
    from: "Mar 2026",
    to: "Present",
    techStack: [
      "Nextjs",
      "Django",
      "DRF",
      "PostgreSQL",
      "Scikit-learn",
      "Pandas",
      "Tailwind CSS",
    ],
  },
  {
    title: "PCOS Detection and Prediction",
    img: "/img/pcos.png",
    link: "https://github.com/Sai-Charish/pcos-prediction-and-detection",
    description: [
      "Developed an AI-powered web app to predict PCOS likelihood by analyzing medical and lifestyle data through an interactive interface.",
      "Achieved 99% accuracy and 0.99 F1-score on a 500+ record dataset — an 11% improvement over baseline — using Logistic Regression and XGBoost with hyperparameter tuning.",
    ],
    from: "Jan 2025",
    to: "Apr 2025",
    techStack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Linear Regression",
      "Pandas",
      "Pickle",
    ],
  },
  {
    title: "CineVault",
    img: "/img/CineVault.png",
    link: "https://github.com/Sai-Charish/cinedatabase",
    description: [
      "Developed a movie discovery web application using React that fetches and displays movie data from the TMDB API.",
      "Integrated React Router for multi-page navigation and implemented a favorites system enabling users to add and manage their favorite movies on a separate page.",
    ],
    from: "feb 2026",
    to: "feb 2026",
    techStack: ["Reactjs", "restAPi"],
  },
  {
    title: "Weather Web Application",
    img: "/img/weather.png",
    link: "https://github.com/Sai-Charish/Weather-Report-Using-Reactjs",
    description: [
      "Developed a weather forecasting web application using React that fetches real-time weather data from the OpenWeather REST API",
      "Implemented dynamic UI components to display current weather conditions, temperature, humidity, and location-based forecasts with responsive design.",
    ],
    from: "feb 2026",
    to: "feb 2026",
    techStack: ["reactJS", "restAPI"],
  },
];

export default function Projects() {
  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0d0d0d",
        minHeight: "100vh",
        color: "#f0ece4",
        padding: "120px 0 80px",
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
            Projects
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
          Things I've
          <br />
          <span style={{ color: "#c9a86c" }}>built.</span>
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectComponent key={i} project={project} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            marginTop: "48px",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(240,236,228,0.2)",
            textTransform: "uppercase",
            textAlign: "right",
          }}
        >
          {projects.length} projects &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
