import React from "react";
import ProjectComponent from "./ProjectComponent";

const projects = [
  {
    title: "Intelligent Airline Pricing System",
    img: "",
    link: "",
    description: [
      "Building a full-stack AI web app that predicts optimal airline ticket prices using a regression model trained on historical booking data, demand patterns, and departure timing.",
      "Developing Django REST APIs backed by PostgreSQL and a React.js + Tailwind CSS frontend with real-time price querying and a demand forecasting module.",
      "Designed an end-to-end ML pipeline with CI/CD-ready architecture, enabling seamless model retraining and real-time pricing predictions.",
    ],
    from: "Mar 2026",
    to: "Present",
    techStack: [
      "React.js",
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
    img: "",
    link: "",
    description: [
      "Developed an AI-powered web app to predict PCOS likelihood by analyzing medical and lifestyle data through an interactive interface.",
      "Achieved 99% accuracy and 0.99 F1-score on a 500+ record dataset — an 11% improvement over baseline — using Logistic Regression and XGBoost with hyperparameter tuning.",
    ],
    from: "Jan 2025",
    to: "Apr 2025",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Pickle"],
  },
  {
    title: "Movie Recommendation System",
    img: "",
    link: "",
    description: [
      "Built a content-based recommendation system using the TMDB 5000 dataset with NLP techniques including text preprocessing and cosine similarity.",
      "Engineered features from genres, cast, crew, and keywords to generate top-5 personalized recommendations across 5,000 movies.",
    ],
    from: "May 2024",
    to: "Jun 2024",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP"],
  },
  {
    title: "Weather Web application",
    img: "",
    link: "",
    description: [
      "Built a content-based recommendation system using the TMDB 5000 dataset with NLP techniques including text preprocessing and cosine similarity.",
      "Engineered features from genres, cast, crew, and keywords to generate top-5 personalized recommendations across 5,000 movies.",
    ],
    from: "May 2024",
    to: "Jun 2024",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP"],
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex  flex-wrap justify-around max-w-screen">
        {projects.map((project, i) => (
          <ProjectComponent
            key={i}
            title={project.title}
            img={project.img}
            link={project.link}
            description={project.description}
            teckstack={project.techStack}
            from={project.from}
            to={project.to}
          />
        ))}
      </div>
    </div>
  );
}
