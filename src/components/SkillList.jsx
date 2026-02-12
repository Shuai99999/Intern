// components/SkillList.jsx
import React from "react";
import Skill from "./Skill";

const skills = [
  // Backend (.NET Focus)
  {
    skill: "ASP.NET Core (C#)",
    level: "intermediate",
    color: "#512BD4",
  },
  {
    skill: "Entity Framework Core",
    level: "intermediate",
    color: "#68217A",
  },
  {
    skill: "Node.js",
    level: "intermediate",
    color: "#3C873A",
  },

  // Frontend
  {
    skill: "React",
    level: "intermediate",
    color: "#61DBFB",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#F7DF1E",
  },
  {
    skill: "HTML5 & CSS3",
    level: "intermediate",
    color: "#E34F26",
  },

  // Database (Core Strength)
  {
    skill: "Oracle",
    level: "advanced",
    color: "#F80000",
  },
  {
    skill: "Microsoft SQL Server",
    level: "advanced",
    color: "#CC2927",
  },
  {
    skill: "MongoDB",
    level: "advanced",
    color: "#4DB33D",
  },
  {
    skill: "PostgreSQL",
    level: "intermediate",
    color: "#336791",
  },

  // Infrastructure
  {
    skill: "Linux",
    level: "advanced",
    color: "#FCC624",
  },
  {
    skill: "Microsoft Azure",
    level: "intermediate",
    color: "#0078D4",
  },
  {
    skill: "Docker",
    level: "intermediate",
    color: "#2496ED",
  },
  {
    skill: "CI/CD (Jenkins / GitHub Actions)",
    level: "intermediate",
    color: "#6C63FF",
  },
  {
    skill: "Git & GitHub",
    level: "advanced",
    color: "#181717",
  },

  // Architecture
  {
    skill: "RESTful API Design",
    level: "advanced",
    color: "#6C63FF",
  },
  {
    skill: "MVC Architecture",
    level: "advanced",
    color: "#9C27B0",
  },
];

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill
          key={skillObj.skill}
          skill={skillObj.skill}
          level={skillObj.level}
          color={skillObj.color}
        />
      ))}
    </div>
  );
}
