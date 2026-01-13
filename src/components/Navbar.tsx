import { useEffect, useState } from "react";
import logo from "../assets/2.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string)  =>
    `relative transition-all duration-300 ${
      activeSection === id
        ? "text-[#7ed957]"
        : "text-gray-200 hover:text-[#7ed957]"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-500 z-50">
      
      {/* FULL WIDTH CONTAINER */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-3 md:py-4">

        {/* Logo - extreme left, perfect circle */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full object-cover border border-gray-600"
          />
        </div>

        {/* Navigation - extreme right */}
        <div className="space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 text-sm sm:text-base md:text-lg">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#feature" className={linkClass("feature")}>Feature</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#resume" className={linkClass("resume")}>Resume</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;