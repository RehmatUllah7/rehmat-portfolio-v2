import { Mail, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-10 scroll-mt-24">
      
      {/* Content wrapper — aligned with Feature & Projects */}
      <div className="px-6 lg:px-6 lg:pl-40">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-[#7ed957] uppercase tracking-widest text-sm mb-3">
            Contact
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-200">
            Let’s Work Together
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Email Card */}
          <a
            href="mailto:umer23672@gmail.com"
            className="group relative block max-w-sm rounded-2xl bg-linear-to-br from-[#1c1f23] to-[#111315]
                       p-10 shadow-lg transition-all duration-300
                       hover:shadow-2xl hover:shadow-[#7ed957]/20
                       hover:border hover:border-[#7ed957]/30
                       before:absolute before:inset-0 before:rounded-2xl
                       before:bg-linear-to-br before:from-[#7ed957]/0 before:to-[#7ed957]/0
                       before:transition-all before:duration-500
                       hover:before:from-[#7ed957]/5 hover:before:to-[#7ed957]/10
                       transform-gpu cursor-pointer"
          >
            <p className="text-gray-400 leading-relaxed mb-8">
Send an email on Gmail to share project details or proposals. I’ll promptly and help turn ideas into actionable plans. Let’s collaborate to bring your vision to life.           </p>

            <div className="inline-flex items-center gap-4 text-[#7ed957] font-medium
                            transition-all duration-300 group-hover:text-white">
              <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center
                               transition-all duration-300 group-hover:bg-[#7ed957]">
                <Mail className="w-5 h-5 text-white" />
              </span>

              <span className="flex items-center gap-2">
                umer23672@gmail.com
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/923423896298"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block max-w-sm rounded-2xl bg-linear-to-br from-[#1c1f23] to-[#111315]
                       p-10 shadow-lg transition-all duration-300
                       hover:shadow-2xl hover:shadow-[#7ed957]/20
                       hover:border hover:border-[#7ed957]/30
                       before:absolute before:inset-0 before:rounded-2xl
                       before:bg-linear-to-br before:from-[#7ed957]/0 before:to-[#7ed957]/0
                       before:transition-all before:duration-500
                       hover:before:from-[#7ed957]/5 hover:before:to-[#7ed957]/10
                       transform-gpu cursor-pointer"
          >
            <p className="text-gray-400 leading-relaxed mb-8">
             Connect on WhatsApp for instant updates and smooth communication. I’m always available to discuss your ideas and keep things moving quickly.
            </p>

            <div className="inline-flex items-center gap-4 text-[#7ed957] font-medium
                            transition-all duration-300 group-hover:text-white">
              <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center
                               transition-all duration-300 group-hover:bg-[#7ed957]">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </span>

              <span className="flex items-center gap-2">
                0342&nbsp;3896298
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/umer-farooq-2422bb269/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block max-w-sm rounded-2xl bg-linear-to-br from-[#1c1f23] to-[#111315]
                       p-10 shadow-lg transition-all duration-300
                       hover:shadow-2xl hover:shadow-[#7ed957]/20
                       hover:border hover:border-[#7ed957]/30
                       before:absolute before:inset-0 before:rounded-2xl
                       before:bg-linear-to-br before:from-[#7ed957]/0 before:to-[#7ed957]/0
                       before:transition-all before:duration-500
                       hover:before:from-[#7ed957]/5 hover:before:to-[#7ed957]/10
                       transform-gpu cursor-pointer"
          >
            <p className="text-gray-400 leading-relaxed mb-8">
              Connect with me on LinkedIn to explore professional opportunities
               and collaborations. 
              Let’s share ideas, insights, and grow our network together.
            </p>

            <div className="inline-flex items-center gap-4 text-[#7ed957] font-medium
                            transition-all duration-300 group-hover:text-white">
              <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center
                               transition-all duration-300 group-hover:bg-[#7ed957]">
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </span>

              <span className="flex items-center gap-2">
                Umer Farooq
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </div>
          </a>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-20 px-6 lg:px-6 lg:pl-40">
        <hr className="border-t border-gray-800 w-[98%]" />
      </div>
    </section>
  );
};

export default Contact;
