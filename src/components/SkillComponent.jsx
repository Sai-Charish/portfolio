import React from "react";

export default function SkillComponent({ title, skills, isLeft }) {
  return (
    <div
      className="ml-[15%] mr-[15%] m-5"
      style={
        isLeft == 0
          ? { borderLeft: "5px solid black", textAlign: "left" }
          : { borderRight: "5px solid black", textAlign: "right" }
      }
    >
      <h1
        className="font-black pb-3 text-3xl border-b-5 mb-5"
        style={isLeft == 0 ? { paddingLeft: "3rem" } : { paddingRight: "3rem" }}
      >
        {title}
      </h1>
      <div
        className="flex"
        style={isLeft == 0 ? { paddingLeft: "3rem" } : { paddingRight: "3rem" }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col justify-center m-2  items-center"
          >
            <img
              className="w-15 ml-4 mr-4 drop-shadow-[0_0_4px_rgba(0,0,0,.5)]"
              src={`https://skill-icons-fast.vercel.app/api/icons?i=${skill.skillIcon}`}
              alt="icon"
            />
            <p className="mt-2 font-bold">{skill.skillName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
