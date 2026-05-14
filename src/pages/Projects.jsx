import React from "react";
import { motion } from "framer-motion";
import realnews from '../assets/Project9.png'
import carImage from '../assets/Project10.png'
import resumeImage from '../assets/Project11.png'
import expence from '../assets/Project7.png'
import invoice from '../assets/Project8.png'
import { image } from "framer-motion/client";
import { ExternalLink } from "lucide-react";
import { RiGithubFill } from "react-icons/ri";

const Projects = ({ darkMode }) => {
  const projects = [
    {
    id: 1,
    title: "📰 Realtime News App (MERN)",
    description:
      "A full-stack MERN application that delivers real-time news updates using external APIs. Includes dynamic content rendering, backend API integration, and scalable architecture.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ChittraPriya/Real-TimeNews-App",
    image: realnews,
    live: "https://real-timenews.netlify.app/",
    category: "Full Stack",
  },

  {
      id: 2,
      title: "📄 AI Resume Generator",
      description:
        "AI-powered MERN stack resume builder with real-time preview, templates, Gemini AI integration, and ImageKit.",
      tech: ["MERN", "Tailwind", "JWT", "Gemini AI"],
      github: "https://github.com/ChittraPriya/ResumeBuilder",
      image: resumeImage,
      live: "https://resume-builder-seven-beta-45.vercel.app/",
      category: "Full Stack",
    },
      {
    id: 3,
    title: "🚗 Car Rental Booking System",
    description:
      "A MERN stack car rental platform featuring booking management, user authentication, driver assignment, and payment integration. Designed with scalable backend architecture and responsive frontend UI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ChittraPriya/Frontend-Cars",
    image: carImage,
    live: "#",
    category: "Full Stack",
  },
    {
    id: 4,
    title: "💰 Expense Tracker",
    description:
      "A React-based expense tracking application that allows users to manage income and expenses efficiently with real-time balance updates, transaction history, and clean UI.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/ChittraPriya/SmartExpenseTracker",
    image: expence,
    live: "https://expense-tracker-cp.netlify.app/",
    category: "Frontend",
  },
  {
    id: 5,
    title: "🧾 Invoice Builder",
    description:
      "A dynamic invoice generator built with React that enables users to create, edit, and download invoices with itemized billing, automatic calculations, and professional layout design.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/ChittraPriya/InvoiceBuilder",
    image: invoice,
    live: "https://invoice-builder2-cp.netlify.app/",
    category: "Frontend",
  },

  ]

  return (
     <section id="projects"
      className={`min-h-screen px-6 py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My<span className="text-orange-500">Projects</span>
      </h2>
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl overflow-hidden shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* IMAGE */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm 
             hover:bg-orange-500 hover:text-white transition duration-300">
                  <RiGithubFill size={16} />GitHub</a>
                <a
                  href={project.live}
                  target="_blank"
                  className= "bg-green-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;