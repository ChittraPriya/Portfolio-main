import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import realnews from "../assets/Project9.png";
import carImage from "../assets/Project10.png";
import resumeImage from "../assets/Project11.png";
import expence from "../assets/Project7.png";
import invoice from "../assets/Project8.png";
import secureNotes from "../assets/securenotes.png";
import tripora from "../assets/Tripora.png";
import { ExternalLink } from "lucide-react";
import { RiGithubFill } from "react-icons/ri";

const Projects = ({ darkMode }) => {
  const [preview, setPreview] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!preview) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setPreview(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [preview]);

  // 💥 Ripple Effect
  const createRipple = (event) => {
    const card = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(card.clientWidth, card.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - card.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - card.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = card.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    card.appendChild(circle);
  };

  const projects = [
    
    {
      id: 7,
      title: "✈️ Tripora – Travel & Booking Platform",
      description:
        "Modern travel and booking platform for discovering destinations, hotels, packages, and booking flights, trains, and buses.",
      tech: ["React", "Vite", "Firebase", "Express.js", "Node.js", "Framer Motion"],
      github: "https://github.com/ChittraPriya/Tripora-Travel",
      image: tripora,
      live: "https://triporatravel.netlify.app/",
      liveLabel: "Live Demo",
    },
    {
      id: 6,
      title: "📝 Secure Notes",
      description:
        "Secure collaborative notes and workspace application with Clerk authentication, Prisma, PostgreSQL, collaboration, and protected share links.",
      tech: ["Next.js", "Clerk", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/ChittraPriya/securenotes",
      image: secureNotes,
      live: "https://securenotes-lilac.vercel.app/",
      liveLabel: "Live Demo",
    },
    {
      id: 1,
      title: "📰 Realtime News App (MERN)",
      description:
        "A full-stack MERN application that delivers real-time news updates using external APIs.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/ChittraPriya/Real-TimeNews-App",
      image: realnews,
      live: "https://real-timenews.netlify.app/",
    },
    {
      id: 2,
      title: "📄 AI Resume Generator",
      description:
        "AI-powered MERN stack resume builder with real-time preview and Gemini AI.",
      tech: ["MERN", "Tailwind", "JWT", "Gemini AI"],
      github: "https://github.com/ChittraPriya/ResumeBuilder",
      image: resumeImage,
      live: "https://resume-builder-seven-beta-45.vercel.app/",
    },
    {
      id: 3,
      title: "🚗 Car Rental Booking System",
      description:
        "MERN stack car rental platform with booking, auth, and scalable backend.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/ChittraPriya/Frontend-Cars",
      image: carImage,
      live: "https://carbookingrent.netlify.app/",
    },
    {
      id: 4,
      title: "💰 Expense Tracker",
      description:
        "React app to track income & expenses with real-time balance updates.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/ChittraPriya/SmartExpenseTracker",
      image: expence,
      live: "https://expense-tracker-cp.netlify.app/",
    },
    {
      id: 5,
      title: "🧾 Invoice Builder",
      description:
        "Dynamic invoice generator with itemized billing and download feature.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/ChittraPriya/InvoiceBuilder",
      image: invoice,
      live: "https://invoice-builder2-cp.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen px-6 py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My<span className="text-orange-500"> Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const link =
            project.live !== "#" ? project.live : project.github;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              whileHover={reduceMotion ? undefined : { scale: 1.04, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                createRipple(e);
                window.open(link, "_blank");
              }}
              className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg group transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/20 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* IMAGE */}
              <div
                className="relative overflow-hidden cursor-zoom-in"
                role="button"
                tabIndex={0}
                aria-label={`Preview image of ${project.title}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setPreview(project);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    setPreview(project);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {project.title}
                </h2>

                <p className="text-sm opacity-80 mt-2">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={reduceMotion ? undefined : { scale: 1.1, y: -2 }}
                      className={`text-xs px-2 py-1 rounded-full cursor-default transition-colors ${
                        darkMode
                          ? "bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/40"
                          : "bg-gray-200 hover:bg-orange-200"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex justify-center gap-4 mt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-500 transition"
                  >
                    <RiGithubFill size={16} />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm transition ${
                      project.live === "#"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    <ExternalLink size={16} />
                    {project.liveLabel || "Live"}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
            role="dialog"
            aria-modal="true"
            aria-label={`Image preview of ${preview.title}`}
          >
            <button
              onClick={() => setPreview(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 text-white text-3xl leading-none w-10 h-10 rounded-full bg-black/50 hover:bg-orange-500 transition"
            >
              &times;
            </button>

            <motion.img
              src={preview.image}
              alt={preview.title}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;