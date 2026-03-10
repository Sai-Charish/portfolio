import React from "react";
import SkillComponent from "./SkillComponent";

const techStack = [
  {
    title: "Programming Languages",
    skills: [
      { skillName: "Python", skillIcon: "python" },
      { skillName: "Java", skillIcon: "java" },
      { skillName: "C", skillIcon: "c" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { skillName: "Numpy", skillIcon: "numpy" },
      { skillName: "Pandas", skillIcon: "pandas" },
      { skillName: "Scikit-Learn", skillIcon: "scikitlearn" },
      { skillName: "Matplotlib", skillIcon: "matplotlib" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { skillName: "MySQL", skillIcon: "mysql" },
      { skillName: "MongoDB", skillIcon: "mongodb" },
      { skillName: "PostgresSQL", skillIcon: "postgresql" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { skillName: "HTML", skillIcon: "html" },
      { skillName: "CSS", skillIcon: "css" },
      { skillName: "Javascript", skillIcon: "javascript" },
      { skillName: "ReactJs", skillIcon: "react" },
      { skillName: "NextJs", skillIcon: "nextjs" },
      { skillName: "Django", skillIcon: "django" },
      { skillName: "DRF", skillIcon: "djangorestframework" },
      { skillName: "Tailwind CSS", skillIcon: "tailwindcss" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { skillName: "Linux ", skillIcon: "linux" },
      { skillName: "Docker", skillIcon: "docker" },
      { skillName: "Kubernetes", skillIcon: "kubernetes" },
      { skillName: "Git", skillIcon: "git" },
      { skillName: "Github", skillIcon: "github" },
    ],
  },
];

export default function Skills() {
  return (
    <div className=" flex flex-col min-h-screen max-w-screen">
      {techStack.map((tech, i) => (
        <div
          key={i}
          style={
            i % 2 != 0
              ? { justifyItems: "right" }
              : {
                  justifyItems: "left",
                }
          }
        >
          <SkillComponent
            title={tech.title}
            skills={tech.skills}
            key={i}
            isLeft={i % 2 != 0}
          />
        </div>
      ))}
    </div>
  );
}
