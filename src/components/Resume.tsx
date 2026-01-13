import { useState } from "react";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Experience from "./Experience";

const Resume = () => {
  const [activeTab, setActiveTab] =   useState<"education" | "skills" | "experience">("education");


  return (
    <section id="resume" className="py-20 scroll-mt-24">
      
      {/* Content wrapper — aligned with Feature, Projects & Contact */}
      <div className="px-6 lg:px-6 lg:pl-40">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[#7ed957] uppercase tracking-widest text-sm mb-3">
            4+ Years of Work Experience
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-200">
            My Resume
          </h2>
        </div>

        {/* Tabs */}
        <div className="w-full bg-[#15181c] rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">

            {/* Education */}
            <div
              onClick={() => setActiveTab("education")}
              className={`rounded-lg py-6 flex items-center justify-center cursor-pointer
                ${
                  activeTab === "education"
                    ? "border border-[#7ed957]"
                    : "hover:bg-[#1c1f23]"
                }`}
            >
              <span
                className={`text-lg font-medium ${
                  activeTab === "education"
                    ? "text-gray-200"
                    : "text-gray-400"
                }`}
              >
                Education
              </span>
            </div>

            {/* Professional Skills */}
            <div
              onClick={() => setActiveTab("skills")}
              className={`rounded-lg py-6 flex items-center justify-center cursor-pointer
                ${
                  activeTab === "skills"
                    ? "border border-[#7ed957]"
                    : "hover:bg-[#1c1f23]"
                }`}
            >
              <span
                className={`text-lg font-medium ${
                  activeTab === "skills"
                    ? "text-gray-200"
                    : "text-gray-400"
                }`}
              >
                Professional Skills
              </span>
            </div>

           {/* Experience */}
<div
  onClick={() => setActiveTab("experience")}
  className={`rounded-lg py-6 flex items-center justify-center cursor-pointer
    ${
      activeTab === "experience"
        ? "border border-[#7ed957]"
        : "hover:bg-[#1c1f23]"
    }`}
>
  <span
    className={`text-lg font-medium ${
      activeTab === "experience"
        ? "text-gray-200"
        : "text-gray-400"
    }`}
  >
    Experience
  </span>
</div>


          </div>
        </div>

        {/* ===== Active Content ===== */}
        {activeTab === "education" && <Education />}
        {activeTab === "skills" && <ProfessionalSkills />}
        {activeTab === "experience" && <Experience />}


      </div>

      {/* Bottom divider */}
      <div className="mt-20 px-6 lg:px-6 lg:pl-40">
        <hr className="border-t border-gray-800 w-[98%]" />
      </div>
    </section>
  );
};

export default Resume;
