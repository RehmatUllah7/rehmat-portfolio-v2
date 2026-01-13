import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Backend & API Development",
    description:
      "Architecting secure, high-performance RESTful APIs and backend services with ASP.NET Core & C#. I focus on scalable architecture, clean code, and seamless database integration using Entity Framework Core and SQL/PostgreSQL.",
    icon: (
      <div className="relative w-12 h-12">
        {/* Outer ring with gear-like effect */}
        <div className="absolute inset-0 border-2 border-[#7ed957] rounded-full transition-all duration-500 group-hover:border-white group-hover:rotate-180">
          {/* Gear teeth */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-4" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-4" />
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-1 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:w-4" />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-1 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:w-4" />
        </div>
        
        {/* Inner circle with connection dots */}
        <div className="absolute inset-2 border border-[#7ed957] rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:scale-75">
          <div className="flex space-x-1">
            <span className="w-1 h-1 bg-[#7ed957] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2" />
            <span className="w-1 h-1 bg-[#7ed957] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2" />
            <span className="w-1 h-1 bg-[#7ed957] rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-2 group-hover:h-2" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Cloud & DevOps Engineering",
    description: "Building reliable, cloud-native applications by implementing CI/CD pipelines (GitHub Actions, Azure DevOps), containerization with Docker, and deploying to platforms like Heroku and AWS. I ensure smooth, automated delivery from code to production.",
    icon: (
      <div className="relative w-12 h-12">
        {/* Cloud outline */}
        <div className="absolute inset-0 border-2 border-[#7ed957] rounded-full transition-all duration-500 group-hover:border-white group-hover:scale-110">
          {/* Cloud curves */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-6 border-t-2 border-x-2 border-[#7ed957] rounded-t-full transition-all duration-300 group-hover:border-white group-hover:h-8" />
        </div>
        
        {/* Arrow pointing upward with animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-4 h-4">
            {/* Arrow stem */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0.5 h-3 bg-[#7ed957] transition-all duration-300 group-hover:h-4 group-hover:bg-white group-hover:w-1" />
            
            {/* Arrow head */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 
              border-l-[3px] border-l-transparent
              border-r-[3px] border-r-transparent
              border-b-[6px] border-b-[#7ed957]
              transition-all duration-300 
              group-hover:border-l-4 group-hover:border-r-4 group-hover:border-b-8 group-hover:border-b-white
              group-hover:translate-y-1" />
            
            {/* Circling dots */}
            <span className="absolute -top-1 -right-1 w-1 h-1 bg-[#7ed957] rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:w-2 group-hover:h-2 group-hover:-top-2 group-hover:-right-2" />
            <span className="absolute -bottom-1 -left-1 w-1 h-1 bg-[#7ed957] rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:w-2 group-hover:h-2 group-hover:-bottom-2 group-hover:-left-2" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Database Design & Optimization",
    description:
      "Structuring efficient data layers with SQL Server & PostgreSQL. From schema design and EF Core management to performance tuning with indexing and bulk operations, I ensure data integrity and speed for high-traffic applications.",
    icon: (
      <div className="relative w-12 h-12">
        {/* Database cylinder outline */}
        <div className="absolute inset-0 border-2 border-[#7ed957] rounded-lg transition-all duration-500 group-hover:border-white">
          {/* Top ellipse */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-2 border-2 border-[#7ed957] rounded-full border-b-0 transition-all duration-300 group-hover:border-white group-hover:w-11 group-hover:h-3" />
          
          {/* Data layers inside */}
          <div className="absolute inset-2 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-1" />
            <span className="w-full h-0.5 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-1" />
            <span className="w-full h-0.5 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-1" />
          </div>
        </div>
        
        {/* Graph bars with growth animation */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          <span className="w-2 h-2 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-4 group-hover:w-3 delay-75" />
          <span className="w-2 h-3 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-5 group-hover:w-3 delay-100" />
          <span className="w-2 h-4 bg-[#7ed957] transition-all duration-300 group-hover:bg-white group-hover:h-6 group-hover:w-3 delay-150" />
        </div>
        
        {/* Connection nodes */}
        <span className="absolute -top-1 left-2 w-1 h-1 bg-[#7ed957] rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:w-2 group-hover:h-2" />
        <span className="absolute -top-1 right-2 w-1 h-1 bg-[#7ed957] rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-white group-hover:w-2 group-hover:h-2" />
      </div>
    ),
  },
];

const Feature = () => {
  return (
    <section id="feature" className="py-10 scroll-mt-24">
      <div className="px-6 lg:px-6 lg:pl-40">
        
        <div className="mb-14 max-w-2xl">
          <p className="text-[#7ed957] uppercase tracking-widest text-sm mb-3">
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
                       hover:shadow-2xl hover:shadow-[#7ed957]/20 hover:border hover:border-[#7ed957]/30
                       hover:bg-linear-to-br hover:from-[#1c1f23] hover:via-[#1a2226] hover:to-[#111315]
                       before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-br before:from-[#7ed957]/0 before:to-[#7ed957]/0 before:transition-all before:duration-500
                       hover:before:from-[#7ed957]/5 hover:before:to-[#7ed957]/10
                       transform-gpu cursor-pointer"
            >
              
              {/* Icon container with enhanced effects */}
              <div className="mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 transition-all duration-300 group-hover:text-[#7ed957] group-hover:translate-x-1">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-10 transition-all duration-300 group-hover:text-gray-300 group-hover:translate-x-1">
                {item.description}
              </p>

              <div className="relative">
                <ArrowRight className="text-[#7ed957] w-6 h-6 transition-all duration-300 group-hover:translate-x-3 group-hover:scale-125 group-hover:text-white" />
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-[#7ed957]/0 transition-all duration-300 group-hover:bg-[#7ed957] group-hover:w-6" />
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