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
        
        {/* React */}
        <div className="group relative">
          {/* Background glow - gray by default, green on hover */}
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#00FFFF]/5
                          group-hover:to-[#00FFFF]/10" />

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
                <linearGradient id="react-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                </linearGradient>
              </defs>
              
              {/* React logo */}
              <ellipse cx="128" cy="128" rx="40" ry="96" 
                       fill="none" 
                       stroke="currentColor" 
                       strokeWidth="12"
                       className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <ellipse cx="128" cy="128" rx="96" ry="40" 
                       fill="none" 
                       stroke="currentColor" 
                       strokeWidth="12"
                       className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <circle cx="128" cy="128" r="14" 
                      fill="currentColor"
                      className="fill-white transition-all duration-300 group-hover:fill-[#00FFFF]" />
            </svg>

            {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#00FFFF] transition-colors duration-300" />
          </div>

          {/* Label below - hidden by default, visible 10px on hover*/}
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 
                          group-hover:opacity-100  transition-all duration-300 whitespace-nowrap">
            React
          </span>
        </div>

        {/* Tailwind CSS */}
        <div className="group relative">
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#00FFFF]/5
                          group-hover:to-[#00FFFF]/10" />
          
          <div className="relative w-12 h-12 p-2 rounded-lg
                          bg-linear-to-br from-[#1c1f23] to-[#111315]
                          transition-colors duration-300
                          group-hover:bg-black
                          flex items-center justify-center hover:scale-110 cursor-pointer">
            {/* Tailwind CSS logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              <defs>
                <linearGradient id="tailwind-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="stop-color-white group-hover:stop-color-[#00FFFF] transition-colors duration-300" />
                  <stop offset="100%" className="stop-color-white group-hover:stop-color-[#00FFFF] transition-colors duration-300" />
                </linearGradient>
              </defs>
              {/* Tailwind wave-like shape */}
              <path d="M64 128c0-35.2 28.8-64 64-64 38.4 0 51.2 32 64 32 12.8 0 25.6-32 64-32 35.2 0 64 28.8 64 64s-28.8 64-64 64c-38.4 0-51.2-32-64-32-12.8 0-25.6 32-64 32-35.2 0-64-28.8-64-64z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="12"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <path d="M128 160c12.8 0 25.6-32 64-32 35.2 0 64 28.8 64 64s-28.8 64-64 64c-38.4 0-51.2-32-64-32-12.8 0-25.6 32-64 32-35.2 0-64-28.8-64-64 0-35.2 28.8-64 64-64 38.4 0 51.2 32 64 32z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
            </svg>
            {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#00FFFF] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 
                         group-hover:opacity-100 text-[10px] transition-all duration-300 whitespace-nowrap">
            Tailwind CSS
          </span>
        </div>

        {/* Canva */}
        <div className="group relative">
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#00FFFF]/5
                          group-hover:to-[#00FFFF]/10" />
          
          <div className="relative w-12 h-12 p-2 rounded-lg
                          bg-linear-to-br from-[#1c1f23] to-[#111315]
                          transition-colors duration-300
                          group-hover:bg-black
                          flex items-center justify-center hover:scale-110 cursor-pointer">
            {/* Canva logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              {/* Canva-like shape with diamond and plus */}
              <path d="M128 32l96 64-96 64-96-64 96-64z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="12"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <path d="M128 160l96-64" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <path d="M32 96l96 64" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <path d="M128 224l96-64-96-64-96 64 96 64z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="12"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <circle cx="128" cy="128" r="12" 
                      fill="currentColor"
                      className="fill-white transition-all duration-300 group-hover:fill-[#00FFFF]" />
            </svg>
            {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#00FFFF] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 text-[10px] opacity-0 
                         group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            Canva
          </span>
        </div>

        {/* Jira */}
        <div className="group relative">
          <div className="absolute -inset-3 rounded-xl bg-linear-to-br
                          from-gray-400/0 to-gray-400/0
                          transition-all duration-500
                          group-hover:from-[#00FFFF]/5
                          group-hover:to-[#00FFFF]/10" />
          
          <div className="relative w-12 h-12 p-2 rounded-lg
                          bg-linear-to-br from-[#1c1f23] to-[#111315]
                          transition-colors duration-300
                          group-hover:bg-black
                          flex items-center justify-center hover:scale-110 cursor-pointer">
            {/* Jira logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              {/* Jira-like shape with triangles/circles */}
              <path d="M80 80l48 48 48-48-48-48-48 48z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="12"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <path d="M128 128l48 48 48-48-48-48-48 48z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="12"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <path d="M80 176l48 48 48-48-48-48-48 48z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="12"
                    className="stroke-white transition-all duration-300 group-hover:stroke-[#00FFFF]" />
              <circle cx="128" cy="128" r="8" 
                      fill="currentColor"
                      className="fill-white transition-all duration-300 group-hover:fill-[#00FFFF]" />
              <circle cx="176" cy="80" r="8" 
                      fill="currentColor"
                      className="fill-white transition-all duration-300 group-hover:fill-[#00FFFF]" />
              <circle cx="80" cy="80" r="8" 
                      fill="currentColor"
                      className="fill-white transition-all duration-300 group-hover:fill-[#00FFFF]" />
              <circle cx="176" cy="176" r="8" 
                      fill="currentColor"
                      className="fill-white transition-all duration-300 group-hover:fill-[#00FFFF]" />
              <circle cx="80" cy="176" r="8" 
                      fill="currentColor"
                      className="fill-white transition-all duration-300 group-hover:fill-[#00FFFF]" />
            </svg>
            {/* Border - gray by default, green on hover */}
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#00FFFF] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 
                         group-hover:opacity-100 text-[10px] transition-all duration-300 whitespace-nowrap">
            Jira
          </span>
        </div>
      </div>
    </div>
  );
};

export default BestStack;