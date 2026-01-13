import React from "react";

const BestStack: React.FC = () => {
  return (
    <div className="mt-8 lg:px-0 flex flex-col items-center lg:items-start gap-5 px-6">
      
      {/* Title */}
      <div className="mb-4">
        <p className="text-gray-400 text-sm px-22 uppercase tracking-[0.3em] font-medium">
          Tech Stack
        </p>
      </div>

      {/* Icons Grid */}
      <div className="grid py-2 grid-cols-2 gap-x-8 gap-y-6 px-20">
        
        {/* ASP.NET Core */}
        <div className="group relative">
          {/* Background glow - gray by default, green on hover */}
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#7ed957]/5
                          group-hover:to-[#7ed957]/10" />

          {/* Diamond + SVG + Border - gray by default, green on hover */}
          <div className="relative w-12 h-12 p-2 rounded-lg
                          bg-linear-to-br from-[#1c1f23] to-[#111315]
                          transition-colors duration-300
                          group-hover:bg-black
                          flex items-center justify-center hover:scale-110 cursor-pointer">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              <defs>
                <linearGradient id="dotnet-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                </linearGradient>
              </defs>
              
              <path d="M128 8l96 56v128l-96 56-96-56V64l96-56z" 
                    className="fill-white transition-colors duration-300 group-hover:fill-black " 
                    opacity="0.9" />
              <text
                x="128"
                y="150"
                textAnchor="middle"
                fontSize="72"
                fontWeight="700"
                fontFamily="Segoe UI, Arial, sans-serif"
                className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"
              >
                .NET
              </text>
            </svg>

            {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#7ed957] transition-colors duration-300" />
          </div>

          {/* Label below - hidden by default, visible 10px on hover*/}
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 
                          group-hover:opacity-100  transition-all duration-300 whitespace-nowrap">
            ASP.NET Core
          </span>
        </div>

 {/* C# */}
        <div className="group relative">
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#7ed957]/5
                          group-hover:to-[#7ed957]/10" />
          
          <div className="relative w-12 h-12 p-2 rounded-lg
                          bg-linear-to-br from-[#1c1f23] to-[#111315]
                          transition-colors duration-300
                          group-hover:bg-black
                          flex items-center justify-center hover:scale-110 cursor-pointer">
            {/* C# logo - gray by default, green on hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              <defs>
                <linearGradient id="csharp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="stop-color-gray-400 group-hover:stop-color-[#7ed957] transition-colors duration-300" />
                  <stop offset="100%" className="stop-color-gray-500 group-hover:stop-color-[#7ed957] transition-colors duration-300" />
                </linearGradient>
              </defs>
              <path d="M128 8l96 56v128l-96 56-96-56V64l96-56z" 
                    opacity="0.9" 
                    fill="url(#csharp-gradient)"
                    className="fill-white transition-colors duration-300 group-hover:fill-black"/>
              <path
                d="M156 92c-6-10-18-16-32-16-22 0-40 18-40 40s18 40 40 40c14 0 26-6 32-16"
                fill="none"
                stroke="gray"
                strokeWidth="14"
                strokeLinecap="round"
                className="transition-all duration-300 group-hover:stroke-[#7ed957]"
              />
              <line x1="150" y1="100" x2="150" y2="156" 
                    stroke="gray" 
                    strokeWidth="8" 
                    className="transition-all duration-300 group-hover:stroke-[#7ed957]"/>
              <line x1="168" y1="100" x2="168" y2="156" 
                    stroke="gray" 
                    strokeWidth="8" 
                    className="transition-all duration-300 group-hover:stroke-[#7ed957]"/>
              <line x1="138" y1="118" x2="182" y2="118" 
                    stroke="gray" 
                    strokeWidth="8" 
                    className="transition-all duration-300 group-hover:stroke-[#7ed957]"/>
              <line x1="138" y1="138" x2="182" y2="138" 
                    stroke="gray" 
                    strokeWidth="8" 
                    className="transition-all duration-300 group-hover:stroke-[#7ed957]"/>
            </svg>
           {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#7ed957] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 
                         group-hover:opacity-100 text-[10px] transition-all duration-300 whitespace-nowrap">
            C# Language
          </span>
        </div>

        {/* PostgreSQL */}
        <div className="group relative">
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#7ed957]/5
                          group-hover:to-[#7ed957]/10" />
          
          <div className="relative w-12 h-12 p-2 rounded-lg
                          bg-linear-to-br from-[#1c1f23] to-[#111315]
                          transition-colors duration-300
                          group-hover:bg-black
                          flex items-center justify-center hover:scale-110 cursor-pointer">
            {/* PostgreSQL logo - gray by default, green on hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-full h-full transition-all duration-300 group-hover:scale-110 "
            >
              <path d="M128 32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="fill-white transition-colors duration-300 group-hover:fill-black"/>
              <path d="M160 80c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M96 176c0-17.7 14.3-32 32-32s32 14.3 32 32" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M80 112c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M176 112c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M128 160c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
            </svg>
            {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#7ed957] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 text-[10px] opacity-0 
                         group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            PostgreSQL
          </span>
        </div>

        {/* Docker */}
        <div className="group relative">
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#7ed957]/5
                          group-hover:to-[#7ed957]/10" />
          
          <div className="relative w-12 h-12 p-2 rounded-lg
                          bg-linear-to-br from-[#1c1f23] to-[#111315]
                          transition-colors duration-300
                          group-hover:bg-black
                          flex items-center justify-center hover:scale-110 cursor-pointer">
            {/* Docker logo - gray by default, green on hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              <path d="M224 136c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="fill-white transition-colors duration-300 group-hover:fill-black"/>
              <path d="M160 104c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M112 104c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M176 104c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M144 88c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" 
                    fill="currentColor"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M96 160c0-17.7 14.3-32 32-32s32 14.3 32 32" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
              <path d="M128 192c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="fill-gray-800 transition-colors duration-300 group-hover:fill-[#7ed957]"/>
            </svg>
           {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#7ed957] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 
                         group-hover:opacity-100 text-[10px] transition-all duration-300 whitespace-nowrap">
            Docker
          </span>
        </div>

       
      </div>
    </div>
  );
};

export default BestStack;