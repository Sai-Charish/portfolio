import { CategoryRow } from "./SkillComponent";

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
      { skillName: "PostgreSQL", skillIcon: "postgresql" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { skillName: "HTML", skillIcon: "html5" },
      { skillName: "CSS", skillIcon: "css" },
      { skillName: "Javascript", skillIcon: "javascript" },
      { skillName: "React.js", skillIcon: "react" },
      { skillName: "Next.js", skillIcon: "nextdotjs" },
      { skillName: "Django", skillIcon: "django" },
      { skillName: "DRF", skillIcon: "djangorestframework" },
      { skillName: "Tailwind CSS", skillIcon: "tailwindcss" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { skillName: "Linux", skillIcon: "linux" },
      { skillName: "Docker", skillIcon: "docker" },
      { skillName: "Kubernetes", skillIcon: "kubernetes" },
      { skillName: "Git", skillIcon: "git" },
      { skillName: "GitHub", skillIcon: "github" },
    ],
  },
];

const categoryAccents = [
  "#c9a86cb3", // gold
  "#78b48cb3", // sage
  "#6c94c9b3", // steel blue
  "#b478c9b3", // mauve
  "#D98B8Bb3", // dusty rose
];

export default function Skills() {
  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0a0a0a",
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
            Skills
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
            margin: "0 0 80px",
            color: "#f0ece4",
            lineHeight: 1.1,
          }}
        >
          What I work
          <br />
          <span style={{ color: "#c9a86c" }}>with.</span>
        </h2>

        {/* Category rows */}
        <div style={{ borderTop: "1px solid rgba(240,236,228,0.05)" }}>
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
          {techStack.reduce((acc, c) => acc + c.skills.length, 0)} technologies
          &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
