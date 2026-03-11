import { CategoryRow } from "./SkillComponent";

const techStack = [
  {
    title: "Programming Languages",
    skills: [
      {
        skillName: "Python",
        skillIcon: "https://cdn.simpleicons.org/python/c9a86c",
      },
      {
        skillName: "Java",
        skillIcon: "https://skillicons.dev/icons?i=java",
      },
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
        skillIcon: "https://skillicons.dev/icons?i=matplotlib",
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
      {
        skillName: "CSS",
        skillIcon: "https://cdn.simpleicons.org/css/b478c9",
      },
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
        skillIcon: "https://cdn.simpleicons.org/docker/D98B8Bb3",
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
