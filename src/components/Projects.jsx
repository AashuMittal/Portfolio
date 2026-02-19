import ProjectCard from "./ProjectCard";

const projectList = [
  {
    title: "Safe Route Navigation System",
    tech: "React • Tailwind • Node.js",
    img: "/hero.png.png",
    githubLink: "https://github.com/AashuMittal/Saferoute_Project",
  
  },
  {
    title: "Book Management",
    tech: "React • Tailwind • Node.js",
    img: "/BookManagement.png",
    githubLink: "https://github.com/AashuMittal/Book-Management-System",
    liveLink: "https://book-management-system-roan.vercel.app/"
  },
  {
    title: "E-Commerce App",
    tech: "Node.js • MongoDB • React",
    img: "/ecomerce.png",
    githubLink: "https://github.com/AashuMittal/Ecommerce-website",
    liveLink: "https://ecommerce-website-mauve-tau.vercel.app/"
  },
  {
    title: "Secure Notes",
    tech: "React • Node.js • MongoDB • Tailwind",
    img: "/SecureNotes.png",
    githubLink: "https://github.com/AashuMittal/SafeNote_Docker_learning",
    liveLink: "https://safe-notes-frontend.vercel.app/"
  },
  {
    title: "Social Media Platform",
    tech: "React • Tailwind • Framer Motion",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1600&auto=format&fit=crop",
    githubLink: "https://github.com/AashuMittal/Social-Media-App",
    liveLink: "https://social-media-app-nu-wine.vercel.app/"
  },
  {
    title: "Student Material",
    tech: "React • Tailwind • Framer Motion",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    githubLink: "https://github.com/AashuMittal/Study_Material",
    liveLink: "https://studymaterial-beige.vercel.app/"
  }
];

const Projects = () => (
  <section id="projects" className="py-24 px-10 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-white tracking-tight">
      My Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
