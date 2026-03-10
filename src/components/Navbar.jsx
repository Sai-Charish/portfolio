import React from "react";
import ResBtn from "./ResBtn";
export default function Navbar() {
  return (
    <div className="max-w-screen sticky top-0 flex backdrop-blur-sm z-100  justify-between items-center border-b border-black">
      <div className="m-2 pl-2 pr-2">ASC</div>
      <div className="m-2 p-2">
        <a className="m-2 pl-2 pr-2" href="#about">
          About
        </a>
        <a className="m-2 pl-2 pr-2" href="#experience">
          Experience
        </a>
        <a className="m-2 pl-2 pr-2" href="#skills">
          Skills
        </a>
        <a className="m-2 pl-2 pr-2" href="#projects">
          Projects
        </a>
        <a className="m-2 pl-2 pr-2" href="#contact me">
          Contact Me
        </a>
      </div>
      <ResBtn className="m-2 pl-2 pr-2" />
    </div>
  );
}
