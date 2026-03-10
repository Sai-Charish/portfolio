import React from "react";
import ExperienceCard from "./ExperienceCard";

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
  return (
    <div className="flex flex-col  min-h-screen  max-w-screen ">
      {experiences.map((current, i) => (
        <ExperienceCard
          key={i}
          organizationName={current.company}
          Role={current.role}
          type={current.type}
          loc={current.location}
          desciption={current.responsibilities}
          From={current.from}
          To={current.to}
        />
      ))}
    </div>
  );
}
