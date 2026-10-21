import { Star, Download } from "lucide-react";
import github from "../assets/github.png";
import {
  SiExpressdotcom,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import image from "../assets/image2.png";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ darkMode }) => {
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    bg: "bg-gray-900",
    buttonPrimary: "bg-orange-500 hover:bg-orange-600 text-white",
    buttonSecondary:
      "border-2 border-orange-500 text-white hover:bg-orange-600",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    bg: "bg-white",
    buttonPrimary: "bg-orange-500 hover:bg-orange-600 text-white",
    buttonSecondary:
      "border-2 border-orange-500 text-gray-800 hover:bg-orange-500 hover:text-white",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`min-h-screen flex items-center ${theme.bg}`}>
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* NAME */}
            <h2 className={`text-xl mb-2 ${theme.textSecondary}`}>Hi, I'm</h2>

            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 ${theme.textPrimary}`}
            >
              Chittra Priya
            </h1>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-orange-500/10 border border-orange-500/20 rounded-full">
              <Star className="w-4 h-4 text-orange-500" />
              <span className={`text-sm ${theme.textSecondary}`}>
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "React & Next.js Developer",
                    2000,
                    "Building Scalable Web Apps",
                    2000,
                    "Full Stack Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className={`mb-8 max-w-xl ${theme.textSecondary}`}>
              I build responsive full-stack applications, reusable UI components
              and AI-powered integrations using React, Next.js, Node.js, Express
              and MongoDB.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
              >
                View Projects
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-orange-500 px-6 py-3 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                <Download size={18} />
                Download Résumé
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white hover:bg-orange-50 text-orange-500 px-6 py-3 rounded-lg transition border-2 border-orange-500"
              >
                Contact Me
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-2 flex-wrap">
              <a
                href="https://github.com/ChittraPriya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg text-white transition hover:bg-black"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-5 h-5"
                />
                GitHub
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/chittra-priya-k-136b77134/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg text-white transition hover:bg-red-500"
              >
                <span className="flex -translate-y-0.5 rtl:rotate-180" aria-hidden="true">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v1H8v-1a6 6 0 0 1 6-6Zm1.116 3.941l1.55 1.55a3.837 3.837 0 0 1-5.363 5.363l-1.55-1.55A9.835 9.835 0 0 0 18 8a9.835 9.835 0 0 0-6.884 1.116l1.065 1.065a3.837 3.837 0 0 1-5.364 5.364l-1.55 1.55A3.838 3.838 0 0 1 5 16a3.838 3.838 0 0 1-1.884-1.884l1.55-1.55A9.835 9.835 0 0 0 3.116 3.116l1.55 1.55a3.837 3.837 0 0 1 5.363 5.363l1.116-1.116ZM8 14a6 6 0 0 0 6 6v1H8v-1a6 6 0 0 0-6-6Zm7.543-5.857a1 1 0 0 1 0 1.414l.707.707a1 1 0 1 1-1.414-1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z" />
                  </svg>
                </span>
                LinkedIn
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>
                  6+
                </h3>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Months Internship Experience
                </p>
              </div>

              <div className="text-center">
                <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>
                  10+
                </h3>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Projects Completed
                </p>
              </div>

              <div className="text-center">
                <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>
                  15+
                </h3>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Technologies Learned
                </p>
              </div>

              <div className="text-center">
                <h3 className={`text-2xl font-bold text-orange-500`}>100%</h3>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Passion for Development
                </p>
              </div>
            </div>
          </div>
          {/* Right Column - Image + Floating Icons */}
          <div className="flex justify-center items-center">
            <div className="relative w-[320px] md:w-[400px] aspect-square">
              {/* SUBTLE ENTRANCE ANIMATION INSTEAD OF CONTINUOUS SPIN */}
              <div
                className="absolute -inset-[3px] rounded-none"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div
                  className="w-full h-full bg-[conic-gradient(from_0deg,transparent_20%,orange_20%,transparent_20%)]"
                  style={{ transform: "rotate(-90deg)" }}
                />
              </div>

              {/* INNER MASK (this hides center, keeps only border visible) */}
              <div className="absolute inset-[3px] bg-white dark:bg-black"></div>

              {/* IMAGE */}
              <div className="relative rounded-2xl w-full h-full overflow-hidden">
                <img
                  src={image}
                  alt="developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOATING ICONS */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 bg-white/80 dark:bg-black/50 backdrop-blur px-3 py-2 rounded-full shadow-md z-10">
                <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiReact className="text-blue-500 text-2xl" />
                </div>
                <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiNodedotjs className="text-green-600 text-2xl" />
                </div>
                <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiExpressdotcom className="text-orange-600 dark:text-orange-400 text-2xl" />
                </div>
                <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiTailwindcss className="text-sky-500 text-2xl" />
                </div>
                <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiMongodb className="text-green-500 text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;