import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accentGreen/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let’s Build Something <br />
            <span className="text-accentGreen">Amazing Together</span>
          </h2>

          <p className="text-white/60 mt-6 text-lg max-w-md">
            I'm actively looking for full-stack opportunities and internships.
            Whether you have a project idea, job opportunity, or just want to connect —
            feel free to reach out.
          </p>

          <a
            href="mailto:aashumittal2132005@gmail.com"
            className="inline-block mt-8 px-8 py-4 rounded-2xl bg-accentGreen text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
          >
            Send Message
          </a>
        </div>

        {/* Right Side Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          {/* Email */}
          <div className="group bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:border-accentGreen/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]">
            <Mail className="text-accentGreen mb-4" size={28} />
            <p className="text-white font-medium">Email</p>
            <p className="text-white/60 text-sm mt-1 break-all">
              aashumittal2132005@gmail.com
            </p>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/AashuMittal"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:border-accentGreen/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
          >
            <Github className="text-accentGreen mb-4" size={28} />
            <p className="text-white font-medium">GitHub</p>
            <p className="text-white/60 text-sm mt-1">
              github.com/AashuMittal
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aashu-mittal-855b2a269/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:border-accentGreen/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
          >
            <Linkedin className="text-accentGreen mb-4" size={28} />
            <p className="text-white font-medium">LinkedIn</p>
            <p className="text-white/60 text-sm mt-1">
              Connect with me
            </p>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Aashu-Mittal/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:border-orange-400/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]"
          >
            <SiLeetcode className="text-orange-400 mb-4" size={28} />
            <p className="text-white font-medium">LeetCode</p>
            <p className="text-white/60 text-sm mt-1">
              Competitive Programming
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
