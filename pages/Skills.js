import React from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Skills() {
  const skills2 = [
    "React",
    "Vue",
    "Angular 6+",
    "AngularJS",
    "NextJs",
    "Javascript",
    "TypeScript",
    "Node",
    "Express",
    "GraphQL",
    "C#",
    "Redux-Thunk",
    "Redux-Sagas",
    "Flux",
    "SQL",
    "MongoDB",
    "Webpack",
    "Babel",
    "Docker",
    "Kubernetes",
    "Segment",
    "Bamboo",
  ];
  let { skills } = attributes;

  console.log(skills);
  return (
    <div className="skills">
      <h1 className="skills_header">Skills</h1>
      <div className="skills_section">
        {skills2.map((skill, key) => {
          return (
            <div className="skills_pill" key={key}>
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}
