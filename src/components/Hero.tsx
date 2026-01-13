import heroImage from "../assets/hero.png";
import TypingText from "../components/TypingText";
import BestStack from "./BestStack";
import FindMe from "./FindMe";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20 lg:py-40">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-[#00FFFF]">Rehmat Ullah</span>
          </h1>

          {/* Animated Line */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 flex justify-center lg:justify-start gap-2">
            <span>a</span>
            <TypingText
              texts={["Frontend Developer", "UI/UX Designer", "Project Manager"]}
            />
          </h2>

          <p className="text-gray-200 py-3 font-sans text-sm sm:text-base lg:text-xl leading-relaxed tracking-wide max-w-full lg:max-w-3xl text-justify">
            I create intuitive, visually appealing digital experiences using React, Tailwind CSS, Figma, and Adobe XD.
With a strong eye for design and clean, responsive code, I bridge creativity and technology.
I lead projects, collaborate with teams, and turn ideas into polished, user-friendly products.
Continuously learning, I stay updated with the latest trends to deliver meaningful, impactful digital solutions.
          </p>

          {/* Components side by side - hide on small screens */}
          <div className="mt-6 flex flex-col lg:flex-row gap-6 items-center lg:items-start max-w-[384px] lg:max-w-none sm:flex">
            <FindMe />
            <BestStack />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Rehmat Ullah Hero"
            className="w-72 sm:w-80 lg:w-116 h-auto rounded-2xl shadow-lg"
          />
        </div>

      </div>

      {/* Horizontal Line at the end of component */}
      <div className="absolute bottom-0 left-0 right-0 mt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto justify-end">
          <hr className="border-t border-gray-800 w-[102%]" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
