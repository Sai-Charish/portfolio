"use client";
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
  return (
    <div className="font-serif bg-[#0d0d0d] min-h-screen text-[#f0ece4] py-28 md:py-30 relative">
      <div className="max-w-300 mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-18">
          <div className="w-10 h-px bg-[#c9a86c]" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a86c]">
            Experience
          </span>
          <div className="flex-1 h-px bg-[#c9a86c]/10" />
        </div>

        <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-tight leading-[1.1] mb-16 text-[#f0ece4]">
          Where I've
          <br />
          <span className="text-[#c9a86c]">worked.</span>
        </h2>

        {/* Cards */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-[11px] tracking-[0.2em] text-[#f0ece4]/20 uppercase text-right">
          {experiences.length} positions&nbsp;·&nbsp;{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
