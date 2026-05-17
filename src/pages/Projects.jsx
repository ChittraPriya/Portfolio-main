import React from "react";
import { motion } from "framer-motion";
import realnews from "../assets/Project9.png";
import carImage from "../assets/Project10.png";
import resumeImage from "../assets/Project11.png";
import expence from "../assets/Project7.png";
import invoice from "../assets/Project8.png";
import { ExternalLink } from "lucide-react";
import { RiGithubFill } from "react-icons/ri";

const Projects = ({ darkMode }) => {

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
      live: "#",
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
        {projects.map((project) => {
          const link =
            project.live !== "#" ? project.live : project.github;

          return (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.04, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                createRipple(e);
                window.open(link, "_blank");
              }}
              className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg group ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
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
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-500 transition"
                  >
                    <RiGithubFill size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm transition ${
                      project.live === "#"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;