const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-white">
          <span className="text-orange-800 mr-2">Aashu</span>
          <span className="text-white">Mittal</span>
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-white transition-colors duration-300">
                {item}
              </span>

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
