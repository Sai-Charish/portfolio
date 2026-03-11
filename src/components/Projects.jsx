"use client";
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
      "Achieved 99% accuracy and 0.99 F1-score on a 500+ record dataset using Logistic Regression and XGBoost with hyperparameter tuning.",
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
      "Integrated React Router for multi-page navigation and implemented a favorites system enabling users to manage their favorite movies.",
    ],
    from: "Feb 2026",
    to: "Feb 2026",
    techStack: ["Reactjs", "REST API"],
  },
  {
    title: "Weather Web Application",
    img: "/img/weather.png",
    link: "https://github.com/Sai-Charish/Weather-Report-Using-Reactjs",
    description: [
      "Developed a weather forecasting web application using React that fetches real-time weather data from the OpenWeather REST API.",
      "Implemented dynamic UI components to display current weather conditions, temperature, humidity, and location-based forecasts.",
    ],
    from: "Feb 2026",
    to: "Feb 2026",
    techStack: ["ReactJS", "REST API"],
  },
];

export default function Projects() {
  return (
    <div className="font-serif bg-[#0d0d0d] min-h-screen text-[#f0ece4] py-28 md:py-30">
      <div className="max-w-300 mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-18">
          <div className="w-10 h-px bg-[#c9a86c]" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a86c]">
            Projects
          </span>
          <div className="flex-1 h-px bg-[#c9a86c]/10" />
        </div>

        <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-tight leading-[1.1] mb-16 text-[#f0ece4]">
          Things I've
          <br />
          <span className="text-[#c9a86c]">built.</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectComponent key={i} project={project} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-[11px] tracking-[0.2em] text-[#f0ece4]/20 uppercase text-right">
          {projects.length} projects&nbsp;·&nbsp;{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
