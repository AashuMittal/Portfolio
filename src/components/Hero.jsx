import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I’m <span className="text-white">Aashu Mittal</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-accentGreen mb-6">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-md">
          I build modern, fast and scalable web applications with clean UI and
          solid backend architecture.
        </p>

        <div className="flex gap-4">
         <a href="#projects">
  <button className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)]">
    View My Work
  </button>
</a>


          <a href="\Updated_resume_Aashu.pdf" download>
  <button className="cursor-pointer border border-white/10 py-3 px-8 rounded-lg hover:bg-white/5 transition">
    Download Resume
  </button>
</a>

        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
  initial={{ opacity: 0, x:60, scale: 0.95 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay:.8, duration: 0.8 }}
  className="relative flex justify-center"
>
  {/* SOFT GLOW (NO BLUR) */}
  <div className="absolute w-[420px] h-[520px] rounded-3xl   ring-emerald-400/20" />

  {/* IMAGE */}
  <img
    src="/hero.png.png"
    alt="Developer working"
    className="relative z-10 w-[520px] h-[420px] object-cover rounded-3xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)] brightness-110 contrast-105 hover:brightness-115 hover:contrast-110 transition-all duration-500"
  />
</motion.div>

    </section>
  );
};

export default Hero;
