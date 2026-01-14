import sygma from "../assets/78.png";
import zain from "../assets/h.png";
import stvoo from "../assets/l.png";
import admin from "../assets/admin.png"
import fun from "../assets/fun.png"
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EasyKaam Web",
    image: sygma,
    github: "https://github.com/RehmatUllah7/easykaam",
    live: "https://easykaam-pink.vercel.app/",
    description:
      "EasyKaam is a full-stack service marketplace designed to simplify on-demand home services. Users can browse services, book professionals, and manage requests in real time. The platform is built with a scalable architecture, emphasizing performance, usability, and clean UI/UX for both customers and service providers."  },
  {
    title: "HarfZaad",
    image: zain,
    github: "https://github.com/RehmatUllah7/Harfzaaar",
    live: "https://harfzaad.vercel.app/",
    description:
      "HarfZaad is a content-driven web application designed to support writers and readers by offering a structured platform for publishing and discovering literary content. The project emphasizes clean UI/UX, performance, and scalability. It secured 2nd Position at the Career Expo, COMSATS University, for its technical execution and concept originality.",
  },
  {
    title: "LinkMyLeads",
    image: stvoo,
    github: "https://github.com/RehmatUllah7/LinkMyLeads",
    live: "https://link-my-leads.vercel.app/",
    description:
      "Link My Leads is a real estate solutions provider that helps customers discover and connect with properties through a static, easy-to-navigate website. The platform focuses on showcasing listings effectively while providing a seamless bridge between clients and agents.",
  },
   {
    title: "Admin Panels",
    image: admin,
    github: undefined,
    live: undefined,
    description:
      "The admin panels of EasyKaam and HarfZaad provide streamlined dashboards for platform management. EasyKaam’s admin handles professionals, service categories, job tracking, and payments, while HarfZaad’s admin manages content, users, and engagement metrics. Both panels are designed for efficiency, usability, and smooth platform operation.",
  },
   {
    title: "Funny Websites",
    image: fun,
    github: "https://github.com/RehmatUllah7/Fuuny-Day-Predictor",
    live: "https://fuuny-day-predictor.vercel.app/",
    description:
      "I have created multiple fun, interactive mini websites for Instagram, featuring humorous coding experiments. These include a Funny Day Predictor, Cricket Selector, AI Search Bot, Zodiac Insight, etc. All designed to entertain while showcasing creative coding and playful web interactions.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 scroll-mt-24">
      
      {/* Content wrapper — SAME AS FEATURE */}
      <div className="px-6 lg:px-6 lg:pl-40">

        {/* Heading — left aligned like Feature */}
        <div className="mb-14 max-w-2xl">
          <p className="text-[#00FFFF] uppercase tracking-widest text-sm mb-3">
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
                  <h3 className="text-[#00FFFF] text-lg font-semibold tracking-wide">
                    {project.title}
                  </h3>

                 <div className="flex gap-3">
  {/* GitHub */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-black flex items-center justify-center
               hover:bg-[#16d1ce] transition cursor-pointer group"
  >
    <Github className="w-4 h-4 text-white group-hover:scale-110 transition" />
  </a>

  {/* Live Link */}
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-black flex items-center justify-center
               hover:bg-[#16d1ce] transition cursor-pointer group"
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
