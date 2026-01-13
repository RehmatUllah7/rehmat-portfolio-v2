import sygma from "../assets/navbar.png";
import zain from "../assets/navbar.png";
import stvoo from "../assets/navbar.png";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SafeMum",
    image: sygma,
    github: "https://github.com/UmerMalik298/SafeMum",
    live: "https://safemum-production.up.railway.app/swagger",
    description:
      "SafeMum is a backend-driven system built to manage maternal health-related data using secure and scalable APIs. The project focuses on clean architecture, secure data handling, and reliable backend operations for healthcare-oriented use cases."  },
  {
    title: "EasyKaam",
    image: zain,
    github: "https://github.com/UmerMalik298/EasyKaam",
    live: "https://easykaam-production.up.railway.app/swagger/index.html",
    description:
      "EasyKaam is a backend-driven platform designed to manage jobs, workers, and task updates efficiently. It provides secure REST APIs for work assignment, progress tracking, and data synchronization, built with scalability and performance in mind.",
  },
  {
    title: "STOVOO",
    image: stvoo,
    github: "https://github.com/yourname/sygma",
    live: "https://sygma.com",
    description:
      "StoVoo is a food service & delivery app bringing people and food together in an engaging, fun & exciting way.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 scroll-mt-24">
      
      {/* Content wrapper — SAME AS FEATURE */}
      <div className="px-6 lg:px-6 lg:pl-40">

        {/* Heading — left aligned like Feature */}
        <div className="mb-14 max-w-2xl">
          <p className="text-[#7ed957] uppercase tracking-widest text-sm mb-3">
            Check these out on my github
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-200">
            My Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group max-w-sm mx-auto lg:mx-0
                         rounded-2xl bg-linear-to-br from-[#1c1f23] to-[#111315]
                         shadow-[0_0_60px_rgba(0,0,0,0.6)]
                         overflow-hidden transition-transform duration-300
                         hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="p-6">
                <div className="rounded-xl overflow-hidden bg-white cursor-pointer hover:scale-110 transition-transform duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10">
                <div className="flex items-center justify-between mb-4 hover:scale-110 transition-transform duration-300">
                  <h3 className="text-[#7ed957] text-lg font-semibold tracking-wide">
                    {project.title}
                  </h3>

                 <div className="flex gap-3">
  {/* GitHub */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-black flex items-center justify-center
               hover:bg-[#7ed957] transition cursor-pointer group"
  >
    <Github className="w-4 h-4 text-white group-hover:scale-110 transition" />
  </a>

  {/* Live Link */}
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-black flex items-center justify-center
               hover:bg-[#7ed957] transition cursor-pointer group"
  >
    <ExternalLink className="w-4 h-4 text-white group-hover:scale-110 transition" />
  </a>
</div>

                </div>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom divider — SAME rhythm as Feature */}
      <div className="mt-20 px-6 lg:px-6 lg:pl-40">
        <hr className="border-t border-gray-800 w-[98%]" />
      </div>
    </section>
  );
};

export default Projects;
