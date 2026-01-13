import React from "react";

const FindMe: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-center lg:items-start gap-5">
      
      {/* Title */}
      <div className="mb-4">
        <p className="text-gray-400 px-2 text-sm uppercase tracking-[0.3em] font-medium">
          Find Me On
        </p>
       
      </div>

      {/* Icons Grid */}
      <div className="grid py-2 grid-cols-2 gap-x-8 gap-y-6">
        
        {/* GitHub */}
        <a
          href="https://github.com/RehmatUllah7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group relative"
        >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              <path 
                d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.922.43.372.815 1.102.815 2.222 0 1.604-.014 2.896-.014 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                className="fill-white transition-colors duration-300 group-hover:fill-[#00FFFF] "
              />
            </svg>
           <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#00FFFF] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 
                          group-hover:opacity-100  transition-all duration-300 whitespace-nowrap">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rehmat-ullah-bhatti-999771378/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group relative"
        >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              <path 
                d="M22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.205 24 24 23.23 24 22.277V1.723C24 .77 23.205 0 22.225 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.542a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.556v-5.605c0-1.337-.024-3.064-1.868-3.064-1.868 0-2.154 1.459-2.154 2.968v5.701h-3.556V9h3.414v1.561h.048c.476-.9 1.637-1.847 3.37-1.847 3.602 0 4.27 2.37 4.27 5.455v6.283z"
                className="fill-white transition-colors duration-300 group-hover:fill-[#00FFFF] "
              />
            </svg>
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#00FFFF] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 
                          group-hover:opacity-100  transition-all duration-300 whitespace-nowrap">
            LinkedIn
          </span>
        </a>

      {/* Gmail */}
<a
  href="mailto:rehmatullah7427@gmail.com"
  aria-label="Email"
  className="group relative"
>
  {/* Glow */}
  <div
    className="absolute -inset-3 rounded-xl
               bg-linear-to-br from-[#00FFFF]/0 to-[#00FFFF]/0
               transition-all duration-500
               group-hover:from-[#00FFFF]/5
               group-hover:to-[#00FFFF]/10"
  />

  {/* Icon Wrapper */}
  <div
    className="relative w-12 h-12 p-2 rounded-lg
               bg-linear-to-br from-[#1c1f23] to-[#111315]
               flex items-center justify-center
               transition-all duration-300
               group-hover:bg-black
               group-hover:scale-110
               cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="w-full h-full"
    >
      {/* Outer envelope (stays white) */}
      <path
        d="M6 10c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h36c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2H6z"
        className="fill-white group-hover:fill-gray-800 "
      />

      {/* Inner M / flap (turns green on hover) */}
      <path
        d="M42 12L24 24 6 12"
        className="fill-black transition-colors duration-300
                   group-hover:fill-[#00FFFF]"
      />

      {/* Bottom fold */}
      <path
        d="M6 12l18 12 18-12v24H6z"
        className="fill-white group-hover:fill-gray-800 "
      />
    </svg>

    {/* Border */}
    <div
      className="absolute inset-0 rounded-lg border border-gray-700
                 transition-colors duration-300
                 group-hover:border-[#00FFFF]"
    />
  </div>

  {/* Label */}
  <span
    className="absolute -bottom-6 left-1/2 -translate-x-1/2
               text-[10px] text-gray-400 opacity-0
               transition-all duration-300
               group-hover:opacity-100 whitespace-nowrap"
  >
    Gmail
  </span>
</a>


        {/* WhatsApp */}
        <a
          href="https://wa.me/03185601285"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group relative"
        >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-full h-full transition-all duration-300 group-hover:scale-110"
            >
              <path 
                d="M256.064 32C132.288 32 32 132.288 32 256.064c0 44.224 13.056 87.232 37.76 124.16L32 480l102.016-36.672c35.712 19.456 75.968 29.76 117.248 29.76 123.776 0 224.064-100.288 224.064-224.064C480.128 132.288 379.84 32 256.064 32zm0 408.576c-37.248 0-73.6-9.856-105.6-28.544l-7.552-4.48-60.736 21.824 22.656-58.944-4.928-7.872c-19.712-31.36-30.208-67.584-30.208-105.536 0-108.48 88.32-196.8 196.8-196.8s196.8 88.32 196.8 196.8-88.32 196.8-196.8 196.8zm112.896-144.64c-6.144-3.072-36.352-17.92-41.92-19.968-5.632-2.048-9.728-3.072-13.824 3.072-4.096 6.144-15.872 19.968-19.456 24.064-3.584 4.096-7.168 4.608-13.312 1.536-36.352-18.176-60.16-32.512-84.224-73.536-6.4-10.496 6.4-9.728 18.432-32.512 2.048-4.096 1.024-7.68-.512-10.752-1.536-3.072-13.824-33.28-18.944-45.568-4.992-11.904-10.112-10.24-13.824-10.496-3.584-.256-7.68-.256-11.776-.256s-10.752 1.536-16.384 7.68c-5.632 6.144-21.504 21.504-21.504 52.224 0 30.72 22.016 60.416 24.96 64.512 3.072 4.096 42.368 64.768 102.656 90.752 14.336 6.144 25.6 9.856 34.304 12.672 14.464 4.608 27.648 3.968 38.016 2.432 11.52-1.664 36.352-14.848 41.472-29.312 5.12-14.464 5.12-26.88 3.584-29.312-1.536-2.432-5.632-3.968-11.776-7.04z"
                className="fill-white transition-colors duration-300 group-hover:fill-[#00FFFF] "
              />
            </svg>
            <div className="absolute inset-0 rounded-lg border border-gray-700
                            group-hover:border-[#00FFFF] transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 
                          group-hover:opacity-100  transition-all duration-300 whitespace-nowrap">
            WhatsApp
          </span>
        </a>

      </div>

     

    </div>
  );
};

export default FindMe;