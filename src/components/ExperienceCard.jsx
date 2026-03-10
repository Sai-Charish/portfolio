import { Dot, Minus } from "lucide-react";
import React from "react";

export default function ExperienceCard({
  organizationName,
  From,
  To,
  Role,
  desciption,
  projects,
  skills,
  type,
  loc,
}) {
  return (
    <>
      <div className="flex justify-center">
        {/* Dash and Dot */}
        <div className="flex justify-center min-h-full min-w-16">
          <div className="relative top-[35%] left-[14%]   w-4 h-4 rounded-[50%] bg-black"></div>
          <div className="border border-black"></div>
        </div>

        {/* main */}
        <div className="border border-black m-5 p-6 w-[70%]">
          <div className="flex justify-between ">
            <h1 className="font-black text-3xl  flex items-end">
              {organizationName}
            </h1>
            <p className=" flex items-end">
              {From} <Minus /> {To}
            </p>
          </div>
          <div className="italic flex ">
            <p className="font-bold">{Role}</p> <Minus /> {type}{" "}
          </div>
          <div className="ml-2">
            {desciption.map((point, i) => (
              <p key={i}>
                <Dot className="inline" />
                {point}
              </p>
            ))}
          </div>
          <p>{projects}</p>
          <div className="">{skills}</div>
        </div>
      </div>
    </>
  );
}
