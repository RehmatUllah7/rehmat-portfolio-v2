import { useEffect, useState } from "react";

// 1️⃣ Define a type for each skill
type Skill = {
  name: string;
  level: number; // percentage as number
};

// 2️⃣ Skills array
const skills: Skill[] = [
  { name: "ASP .NET Core / C#", level: 80 },
  { name: "REST API", level: 85 },
  { name: "Entity Framework & LINQ", level: 80 },
  { name: "SQL Server", level: 75 },
  { name: "Docker", level: 70 },
  { name: "SignalR", level: 70 },
];

const ProfessionalSkills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      {skills.map((skill: Skill, index: number) => (
        <div
          key={index}
          className="bg-[#1c1f23] rounded-2xl p-8 shadow-lg"
        >
          {/* Title + Percentage */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-200">
              {skill.name}
            </h3>
            <span className="text-sm font-semibold text-[#00FFFF]">
              {skill.level}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-[#111315] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00FFFF] rounded-full transition-all duration-1000 ease-out"
              style={{
                width: animate ? `${skill.level}%` : "0%",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalSkills;
