import React from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Skills() {
  let { skills } = attributes;

  console.log(skills);
  return (
    <div className="skills">
      <h1 className="skills_header">Skills</h1>
      <div className="skills_section">
        {skills.map((skill, key) => {
          return (
            <div className="skills_pill" key={key}>
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
