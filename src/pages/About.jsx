import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Rocket,
  Brain,
  Laptop,
} from "lucide-react";

const About = ({ darkMode }) => {
  const stats = [
    { value: "10+", label: "Technologies" },
    { value: "5+", label: "MERN Projects" },
    { value: "500+", label: "Hours Coding" },
    { value: "100%", label: "Learning Mindset" },
  ];

  const cards = [
    {
      icon: <Layout />,
      title: "Full Stack Development",
      desc: "Building Scalable MERN stack applications with responsive frontend and secure backend architecture",
    },
    {
      icon: <Database />,
      title: "Clean UI Design",
      desc: "Creating Modern, user-friendly, and mobile-responsive interfaces using React and Tailwind CSS",
    },
    {
      icon: <Rocket />,
      title: "API Integration",
      desc: "Developing and integrating REST APIs, authentication systems, and database management solutions.",
    },
    {
      icon: <Brain />,
      title: "Performance Focus",
      desc: "Optimizing applications for speed, responsiveness, and better user experience."
    },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen px-6 py-20 flex items-center justify-center transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl w-full space-y-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(255,140,0,0.6)]">Me</span>
          </h2>

          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            MERN Stack Developer passionate about building modern web experiences
          </p>

          <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed opacity-90">
            My expertise includes frontend and backend development using React.js, Node.js, Express.js, and MongoDB. I have built projects such as authentication systems, hotel booking platforms, movie ticket booking applications, AI chatbot integrations, and feedback management systems with role-based access control.
          </p>
          <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed opacity-90">
            I’m committed to writing clean, maintainable code and building applications that provide smooth user experiences. Along with technical development, I enjoy problem-solving, learning new technologies, and contributing creative ideas to projects.
When I’m not coding, I spend time exploring UI/UX trends, improving my MERN stack skills, working on portfolio projects, and learning modern development tools and best practices.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl text-center border backdrop-blur-md shadow-lg ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-3xl font-bold text-orange-500 drop-shadow-[0_0_10px_rgba(255,140,0,0.5)]">
                {item.value}
              </h3>
              <p className="text-sm mt-2 opacity-80">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border shadow-lg hover:scale-105 transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3 text-orange-500">
                {card.icon}
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>

              <p className="text-sm mt-3 opacity-80">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Glow Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500 drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]">
            Crafting Digital Experiences with Code
          </h3>

          <p className="text-sm opacity-80">
            Turning ideas into scalable and interactive web applications
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;