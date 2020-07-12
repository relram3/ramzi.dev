import React, { useState } from "react";
import { attributes } from "../content/home.md";

export default function Skills() {
  const [filter, setFilter] = useState("all");
  let { skills } = attributes;

  return (
    <div className="skills">
      <h1 className="skills_header">Skills</h1>
      <div className="skills_filter">
        <div
          className={
            filter === "all" ? "skills_filter-tab active" : "skills_filter-tab"
          }
          onClick={() => setFilter("all")}
        >
          All
        </div>
        <div
          className={
            filter === "front"
              ? "skills_filter-tab active"
              : "skills_filter-tab"
          }
          onClick={() => setFilter("front")}
        >
          Front-End
        </div>
        <div
          className={
            filter === "back" ? "skills_filter-tab active" : "skills_filter-tab"
          }
          onClick={() => setFilter("back")}
        >
          Back-End
        </div>
        <div
          className={
            filter === "other"
              ? "skills_filter-tab active"
              : "skills_filter-tab"
          }
          onClick={() => setFilter("other")}
        >
          Other
        </div>
      </div>
      <div className="skills_section">
        {skills.map((skill, key) => {
          console.log(filter, skill.description, skill.name);

          let filteredClass = skill.description === filter ? " activePill" : "";
          let classname =
            filter === "all" ? "skills_pill" : "skills_pill" + filteredClass;
          return (
            <div className={classname} key={key}>
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
