import React from "react";
import { ArrowDown, Minus } from "lucide-react";

export default function About() {
  return (
    <div className="flex items-center flex-col  max-w-screen min-h-screen ">
      <div className="flex p-20 justify-around items-center min-w-screen">
        <div className="">
          <p className="tracking-widest">
            <Minus className="inline " strokeWidth={"1px"} />
            Hi there, I'm
          </p>
          <h1 className="font-bold font-[harmond] text-6xl mt-1">
            ANANTHOJI SAI CHARISH
          </h1>
          <p className="font-light font-stretch-100% text-2xl  text-justify ">
            Full Stack Developer | ML Engineer | Data Scientst
          </p>
          <div className="border-l border-black pl-5 mt-5 ">
            B.Tech graduate in AI &amp; ML with hands-on experience building{" "}
            <br />
            end-to-end machine learning pipelines, REST APIs, and containerized{" "}
            <br />
            fullstack applications. Proficient in Python, Java, Django, <br />
            React.js, Docker, and Kubernetes.
          </div>
        </div>
        <img
          className="w-75 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          src="/img/profile.jpg"
          alt="photo"
        />
      </div>
      <p className="">
        Scroll down <ArrowDown className="inline" />
      </p>
    </div>
  );
}
