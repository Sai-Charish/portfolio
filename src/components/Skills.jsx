import { CategoryRow } from "./SkillComponent";

const techStack = [
  {
    title: "Programming Languages",
    skills: [
      {
        skillName: "Python",
        skillIcon: "https://cdn.simpleicons.org/python/c9a86c",
      },
      { skillName: "Java", skillIcon: "https://skillicons.dev/icons?i=java" },
      { skillName: "C", skillIcon: "https://cdn.simpleicons.org/c/c9a86c" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        skillName: "Numpy",
        skillIcon: "https://cdn.simpleicons.org/numpy/78b48c",
      },
      {
        skillName: "Pandas",
        skillIcon: "https://cdn.simpleicons.org/pandas/78b48c",
      },
      {
        skillName: "Scikit-Learn",
        skillIcon: "https://cdn.simpleicons.org/scikitlearn/78b48c",
      },
      {
        skillName: "Matplotlib",
        skillIcon: "https://skill-icons-fast.vercel.app/api/icons?i=matplotlib",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        skillName: "MySQL",
        skillIcon: "https://cdn.simpleicons.org/mysql/6c94c9",
      },
      {
        skillName: "MongoDB",
        skillIcon: "https://cdn.simpleicons.org/mongodb/6c94c9",
      },
      {
        skillName: "PostgreSQL",
        skillIcon: "https://cdn.simpleicons.org/postgresql/6c94c9",
      },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      {
        skillName: "HTML",
        skillIcon: "https://cdn.simpleicons.org/html5/b478c9",
      },
      { skillName: "CSS", skillIcon: "https://cdn.simpleicons.org/css/b478c9" },
      {
        skillName: "Javascript",
        skillIcon: "https://cdn.simpleicons.org/javascript/b478c9",
      },
      {
        skillName: "React.js",
        skillIcon: "https://cdn.simpleicons.org/react/b478c9",
      },
      {
        skillName: "Next.js",
        skillIcon: "https://cdn.simpleicons.org/nextdotjs/b478c9",
      },
      {
        skillName: "Django",
        skillIcon: "https://cdn.simpleicons.org/django/b478c9",
      },
      {
        skillName: "DRF",
        skillIcon:
          "https://skill-icons-fast.vercel.app/api/icons?i=djangorestframework",
      },
      {
        skillName: "Tailwind CSS",
        skillIcon: "https://cdn.simpleicons.org/tailwindcss/b478c9",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        skillName: "Linux",
        skillIcon: "https://cdn.simpleicons.org/linux/D98B8B",
      },
      {
        skillName: "Docker",
        skillIcon: "https://cdn.simpleicons.org/docker/D98B8B",
      },
      {
        skillName: "Kubernetes",
        skillIcon: "https://cdn.simpleicons.org/kubernetes/D98B8B",
      },
      { skillName: "Git", skillIcon: "https://cdn.simpleicons.org/git/D98B8B" },
      {
        skillName: "GitHub",
        skillIcon: "https://cdn.simpleicons.org/github/D98B8B",
      },
    ],
  },
];

const categoryAccents = [
  "#c9a86cb3",
  "#78b48cb3",
  "#6c94c9b3",
  "#b478c9b3",
  "#D98B8Bb3",
];

export default function Skills() {
  return (
    <div className="font-serif bg-[#0a0a0a] min-h-screen text-[#f0ece4] py-28 md:py-30">
      <div className="max-w-300 mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-18">
          <div className="w-10 h-px bg-[#c9a86c]" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a86c]">
            Skills
          </span>
          <div className="flex-1 h-px bg-[#c9a86c]/10" />
        </div>

        <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-tight leading-[1.1] mb-20 text-[#f0ece4]">
          What I work
          <br />
          <span className="text-[#c9a86c]">with.</span>
        </h2>

        {/* Category rows */}
        <div className="border-t border-[#f0ece4]/05">
          {techStack.map((category, i) => (
            <CategoryRow
              key={i}
              category={category}
              index={i}
              categoryAccents={categoryAccents}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-[11px] tracking-[0.2em] text-[#f0ece4]/20 uppercase text-right">
          {techStack.reduce((acc, c) => acc + c.skills.length, 0)}{" "}
          technologies&nbsp;·&nbsp;{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
