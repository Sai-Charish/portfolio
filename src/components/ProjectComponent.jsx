import { Dot } from "lucide-react";
import React from "react";

export default function ProjectComponent({
  title,
  img,
  link,
  description,
  teckstack,
  from,
  to,
}) {
  return (
    <div className="max-w-1/3 m-20 aspect-3/3  border-2 p-5 border-black ">
      <div className=" font-bold text-xl p-5">
        <h1 className="text-center">{title}</h1>
      </div>
      <div>
        <a href="https://google.com">
          <img
            className="max-w-full mb-5"
            src="https://placehold.co/1920x1080"
            alt="home page"
          />
        </a>

        <div>
          {description.map((point, i) => (
            <p key={i}>
              <Dot className="inline" /> {point}
            </p>
          ))}
        </div>
      </div>
      <div className="">
        <h1>Tech Used</h1>
        <div className="flex">
          {teckstack.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
