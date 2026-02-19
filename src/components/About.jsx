import { motion } from "framer-motion";

export default function About() {
  const technicalSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percent: 90 },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percent: 60 },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percent: 85 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percent: 75 },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percent: 80 },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percent: 80 },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", percent: 85 },
  ];

  const professionalSkills = [
    { name: "Creativity", percent: 90 },
    { name: "Communication", percent: 65 },
    { name: "Problem Solving", percent: 75 },
    { name: "Teamwork", percent: 85 },
  ];

  const technicalColors = [
    "bg-orange-400",
    "bg-red-700",
    "bg-yellow-300",
    "bg-blue-500",
    "bg-green-400",
    "bg-red-400",
    "bg-teal-400",
  ];

  const professionalColors = [
    "text-red-700",
    "text-blue-400",
    "text-green-400",
    "text-orange-400",
  ];

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
        className="flex flex-col md:flex-row items-start gap-14 md:gap-24"
      >
        {/* Left Section */}
        <motion.div variants={fadeUp} className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-accentGreen">Me</span>
          </h2>

          <div className="w-14 md:w-16 h-1 bg-accentGreen rounded-full mb-8"></div>

          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            I’m <span className="text-white font-semibold">Aashu Mittal</span>, a
            passionate <span className="text-white font-semibold">Full-Stack Developer</span>{" "}
            with hands-on experience in building scalable and real-world web
            applications. I specialize in React.js, Node.js, Express, and MongoDB.
            <br /><br />
            I’ve developed authentication systems using JWT and Redis,
            e-commerce platforms, budget management systems, and interactive
            portfolio applications. I enjoy solving complex problems, optimizing
            backend performance, and crafting clean responsive interfaces using
            modern technologies like Tailwind CSS.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={fadeUp}
          className="md:w-1/2 flex flex-col md:flex-row gap-14 md:gap-20"
        >
          {/* Technical Skills */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Technical <span className="text-accentGreen">Skills</span>
            </h2>

            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5 md:gap-6"
            >
              {technicalSkills.map((skill, idx) => {
                const barColor = technicalColors[idx % technicalColors.length];
                return (
                  <motion.div
                    key={skill.name}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between text-white/80">
                      <div className="flex items-center gap-2">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                        <span className="text-sm">{skill.name}</span>
                      </div>
                      <span className="text-sm">{skill.percent}%</span>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className={`h-2 rounded-full ${barColor}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Professional Skills */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Professional <span className="text-accentGreen">Skills</span>
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {professionalSkills.map((skill, idx) => {
                const color = professionalColors[idx % professionalColors.length];
                const circumference = 2 * Math.PI * 28;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.08 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          strokeWidth="4"
                          stroke="currentColor"
                          fill="transparent"
                          r="28"
                          cx="40"
                          cy="40"
                          className="text-white/10"
                        />
                        <motion.circle
                          strokeWidth="4"
                          stroke="currentColor"
                          fill="transparent"
                          r="28"
                          cx="40"
                          cy="40"
                          className={color}
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{
                            strokeDashoffset:
                              circumference * (1 - skill.percent / 100),
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4 }}
                          strokeLinecap="round"
                        />
                      </svg>

                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                        {skill.percent}%
                      </div>
                    </div>

                    <span className="mt-3 text-white/80 text-xs md:text-sm text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
