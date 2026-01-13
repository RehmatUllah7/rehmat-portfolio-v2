import logo from "../assets/navbar.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300  border-gray-800">
      <div className="px-6 lg:px-6 lg:pl-40 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & About */}
          <div className="flex flex-col items-start gap-4 max-w-sm">
  <img
    src={logo}
    alt="Logo"
    className="w-48 h-48 rounded-full object-cover border-2 border-gray-600"
  />
</div>


          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#00FFFF] font-bold mb-3 text-base tracking-wide">QUICK LINKS</h3>
            <a href="#home" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">Home</a>
            <a href="#feature" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">Features</a>
            <a href="#projects" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">Contact</a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#00FFFF] font-bold mb-3 text-base tracking-wide">RESOURCES</h3>
            <a href="#blog" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">Blog</a>
            <a href="#docs" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">Documentation</a>
            <a href="#tutorials" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">Tutorials</a>
            <a href="#faq" className="text-gray-400 hover:text-[#00FFFF] transition-all duration-300 text-base hover:translate-x-1 inline-block">FAQ</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#00FFFF] font-bold mb-3 text-base tracking-wide">CONTACT</h3>
            <p className="text-gray-400 text-base hover:text-[#00FFFF] transition-all duration-300 hover:translate-x-1 cursor-default">rehmatullah7427@gmail.com</p>
            <p className="text-gray-400 text-base hover:text-[#00FFFF] transition-all duration-300 hover:translate-x-1 cursor-default">+923185601285</p>
            <p className="text-gray-400 text-base hover:text-[#00FFFF] transition-all duration-300 hover:translate-x-1 cursor-default">Islamabad, Pakistan</p>
          </div>
        </div>

        {/* Bottom line - matches the layout's border style */}
        <div className="mt-12">
          <hr className="border-t border-gray-800 w-[98%]" />
          <div className="pt-9  text-gray-400 text-center text-base">
            © {new Date().getFullYear()} Rehmat Ullah. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;