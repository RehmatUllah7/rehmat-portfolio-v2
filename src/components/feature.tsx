import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Frontend Development with React",
    description:
      "Building dynamic, responsive, and scalable web applications with React and Tailwind CSS. I translate designs into high-quality, maintainable code while following modern best practices in component architecture and state management.",
    icon: (
      <div className="relative w-12 h-12">
        {/* React atom symbol */}
        <div className="absolute inset-0 border-2 border-[#00FFFF] rounded-full transition-all duration-500 group-hover:border-white group-hover:rotate-180">
          {/* Electron orbit */}
          <div className="absolute inset-2 border border-[#00FFFF] rounded-full opacity-50 transition-all duration-700 group-hover:border-white group-hover:opacity-100 group-hover:scale-90"></div>
          
          {/* Electron dots */}
          <span className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-3 group-hover:h-3 group-hover:top-0" />
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-3 group-hover:h-3 group-hover:bottom-0" />
          <span className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-3 group-hover:h-3 group-hover:left-0" />
          <span className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-3 group-hover:h-3 group-hover:right-0" />
        </div>
        
        {/* Center nucleus */}
        <div className="absolute inset-4 bg-[#00FFFF] rounded-full transition-all duration-500 group-hover:bg-white group-hover:scale-75"></div>
      </div>
    ),
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Designing user-centered, visually appealing interfaces using Figma, Adobe XD, and Canva. I focus on creating intuitive workflows, responsive layouts, and interactive prototypes that enhance user experience and engagement.",
    icon: (
      <div className="relative w-12 h-12">
        {/* Pen tip */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#00FFFF] transition-all duration-300 group-hover:bg-white group-hover:scale-125 group-hover:top-1"></div>
        
        {/* Pen body */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-2 h-6 bg-linear-to-b from-[#00FFFF] to-transparent transition-all duration-300 group-hover:from-white group-hover:h-7"></div>
        
        {/* Prototype frame */}
        <div className="absolute inset-0 border-2 border-[#00FFFF] rounded-lg transition-all duration-500 group-hover:border-white group-hover:scale-110">
          {/* Screen elements */}
          <div className="absolute top-2 left-2 right-2 h-1 bg-[#00FFFF] rounded transition-all duration-300 group-hover:bg-white"></div>
          <div className="absolute top-5 left-2 w-3/4 h-1 bg-[#00FFFF]/50 rounded transition-all duration-300 group-hover:bg-white group-hover:w-4/5"></div>
          <div className="absolute top-7 left-2 w-2/3 h-1 bg-[#00FFFF]/40 rounded transition-all duration-300 group-hover:bg-white group-hover:w-3/4"></div>
          
          {/* Interaction dot */}
          <span className="absolute bottom-2 right-2 w-2 h-2 bg-[#00FFFF] rounded-full transition-all duration-500 group-hover:bg-white group-hover:w-3 group-hover:h-3 group-hover:bottom-1 group-hover:right-1"></span>
        </div>
      </div>
    ),
  },
  {
    title: "Project Management & Collaboration",
    description:
      "Leading projects from concept to delivery using Agile and Scrum methodologies. I coordinate teams, set milestones, manage deadlines, and ensure projects are delivered efficiently without compromising quality.",
    icon: (
      <div className="relative w-12 h-12">
        {/* Calendar/Board base */}
        <div className="absolute inset-0 border-2 border-[#00FFFF] rounded-lg transition-all duration-500 group-hover:border-white group-hover:rotate-3">
          {/* Timeline/Grid lines */}
          <div className="absolute inset-2 flex flex-col justify-between">
            <div className="flex justify-between">
              <span className="w-1 h-1 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
              <span className="w-1 h-1 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
              <span className="w-1 h-1 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
            </div>
            <div className="flex justify-between">
              <span className="w-1 h-1 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
              <span className="w-1 h-1 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
              <span className="w-1 h-1 bg-[#00FFFF] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
            </div>
          </div>
        </div>
        
        {/* Progress arrow */}
        <div className="absolute -bottom-1 right-0">
          <div className="relative w-6 h-4">
            {/* Arrow body */}
            <span className="absolute top-1/2 -translate-y-1/2 left-0 right-2 h-0.5 bg-[#00FFFF] transition-all duration-300 group-hover:bg-white group-hover:right-1"></span>
            
            {/* Arrow head */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 
              border-l-4 border-l-[#00FFFF]
              border-t-[3px] border-t-transparent
              border-b-[3px] border-b-transparent
              transition-all duration-300 
              group-hover:border-l-white group-hover:border-l-[5px]
              group-hover:border-t-4 group-hover:border-b-4"></span>
          </div>
        </div>
        
        {/* Team connection dots */}
        <span className="absolute -top-1 -left-1 w-1 h-1 bg-[#00FFFF] rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
        <span className="absolute -top-1 -right-1 w-1 h-1 bg-[#00FFFF] rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00FFFF] rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:w-2 group-hover:h-2"></span>
      </div>
    ),
  },
];

const Feature = () => {
  return (
    <section id="feature" className="py-10 scroll-mt-24">
      <div className="px-6 lg:px-6 lg:pl-40">
        
        <div className="mb-14 max-w-2xl">
          <p className="text-[#00FFFF] uppercase tracking-widest text-sm mb-3">
            Features
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-200">
            What I Do
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-linear-to-br from-[#1c1f23] to-[#111315] p-8 shadow-lg transition-all duration-300 hover:scale-[1.03] max-w-sm mx-auto lg:mx-0
                       hover:shadow-2xl hover:shadow-[#00FFFF]/20 hover:border hover:border-[#00FFFF]/30
                       hover:bg-linear-to-br hover:from-[#1c1f23] hover:via-[#1a2226] hover:to-[#111315]
                       before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-br before:from-[#00FFFF]/0 before:to-[#00FFFF]/0 before:transition-all before:duration-500
                       hover:before:from-[#00FFFF]/5 hover:before:to-[#00FFFF]/10
                       transform-gpu cursor-pointer"
            >
              
              {/* Icon container with enhanced effects */}
              <div className="mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 transition-all duration-300 group-hover:text-[#00FFFF] group-hover:translate-x-1">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-10 transition-all duration-300 group-hover:text-gray-300 group-hover:translate-x-1">
                {item.description}
              </p>

              <div className="relative">
                <ArrowRight className="text-[#00FFFF] w-6 h-6 transition-all duration-300 group-hover:translate-x-3 group-hover:scale-125 group-hover:text-white" />
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-[#00FFFF]/0 transition-all duration-300 group-hover:bg-[#00FFFF] group-hover:w-6" />
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <div className="mt-20 px-6 lg:px-6 lg:pl-40">
        <hr className="border-t border-gray-800 w-[98%]" />
      </div>
    </section>
  );
};

export default Feature;