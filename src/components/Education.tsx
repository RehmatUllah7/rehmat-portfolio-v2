const Education = () => {
  return (
    <div className="relative mt-16">

      {/* ===== Vertical timeline ===== */}
      <div className="absolute left-4 top-0 w-1 h-full bg-gray-700"></div>

      {/* ===== Education Item 1 ===== */}
      <div className="relative mb-16 group flex items-start">

        {/* Horizontal line connecting to card */}
        <div className="absolute left-4 top-8 w-16 h-1 bg-gray-700"></div>

        {/* Dot at intersection */}
        <span className="absolute left-4.5 top-8 w-5 h-5 rounded-full bg-gray-500 border-2 border-gray-700 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:bg-[#00FFFF] z-10"></span>

        {/* Card */}
        <div className="ml-20 bg-[#1c1f23] rounded-md p-8 shadow-lg transition-all duration-300 group-hover:bg-[#101214] group-hover:shadow-2xl w-full">
          {/* Badge */}
          <span className="absolute top-6 right-6 bg-black text-[#00FFFF] text-sm px-4 py-2 rounded-lg transition-colors duration-300
                          group-hover:bg-gray-800 group-hover:text-[#00FFFF]">
2021-2025          </span>

          <h3 className="text-2xl font-semibold text-gray mb-2 transition-colors duration-300 group-hover:text-white">
            Bs in Software Engineering
          </h3>

          <p className="text-gray-400 mb-6 transition-colors duration-300 group-hover:text-gray-200">
COMSATS University Islamabad          </p>

          <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
            Studied software related subjects like Programming,
            Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA,
            Compiler Design etc.
          </p>
        </div>
      </div>

      {/* ===== Education Item 2 ===== */}
      <div className="relative mb-16 group flex items-start">

        {/* Horizontal line connecting to card */}
        <div className="absolute left-4 top-8 w-16 h-1 bg-gray-700"></div>

        {/* Dot at intersection */}
        <span className="absolute left-4.5 top-8 w-5 h-5 rounded-full bg-gray-500 border-2 border-gray-700 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:bg-[#00FFFF] z-10"></span>

        {/* Card */}
        <div className="ml-20 bg-[#1c1f23] rounded-md p-8 shadow-lg transition-all duration-300 group-hover:bg-[#101214] group-hover:shadow-2xl w-full">
          {/* Badge */}
          <span className="absolute top-6 right-6 bg-black text-[#00FFFF] text-sm px-4 py-2 rounded-lg transition-colors duration-300
                          group-hover:bg-gray-800 group-hover:text-[#00FFFF]">
2018-2020          </span>

          <h3 className="text-2xl font-semibold text-gray mb-2 transition-colors duration-300 group-hover:text-white">
Higher Secondary Education          </h3>

          <p className="text-gray-400 mb-6 transition-colors duration-300 group-hover:text-gray-200">
F.G Sir Syed College Rawalpindi          </p>

          <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
          Completed FSC Pre Engineering from this college. FSC Subjects: Chemistry, physics, Math, English etc
          </p>
        </div>
      </div>

 {/* ===== Education Item 3 ===== */}
      <div className="relative mb-16 group flex items-start">

        {/* Horizontal line connecting to card */}
        <div className="absolute left-4 top-8 w-16 h-1 bg-gray-700"></div>

        {/* Dot at intersection */}
        <span className="absolute left-4.5 top-8 w-5 h-5 rounded-full bg-gray-500 border-2 border-gray-700 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:bg-[#00FFFF] z-10"></span>

        {/* Card */}
        <div className="ml-20 bg-[#1c1f23] rounded-md p-8 shadow-lg transition-all duration-300 group-hover:bg-[#101214] group-hover:shadow-2xl w-full">
          {/* Badge */}
          <span className="absolute top-6 right-6 bg-black text-[#00FFFF] text-sm px-4 py-2 rounded-lg transition-colors duration-300
                          group-hover:bg-gray-800 group-hover:text-[#00FFFF]">
2016-2018          </span>

          <h3 className="text-2xl font-semibold text-gray mb-2 transition-colors duration-300 group-hover:text-white">
Secondary School Education         </h3>

          <p className="text-gray-400 mb-6 transition-colors duration-300 group-hover:text-gray-200">
F.G Cantt Public Rawalpindi          </p>

          <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
          Studied Matric in this school Subjects: Chemistry, physics, Math, English etc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
