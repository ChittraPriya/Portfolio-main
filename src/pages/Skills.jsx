import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

import {
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  const [filter, setFilter] = useState("All");

  const skills = [
    { name: "React.js", icon: SiReact, level: "Expert", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, level: "Expert", category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, level: "Advanced", category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", category: "Frontend" },

    { name: "Node.js", icon: SiNodedotjs, level: "Advanced", category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, level: "Advanced", category: "Backend" },
    { name: "REST APIs", icon: Icons.Database, level: "Advanced", category: "Backend" },

    { name: "Git & GitHub", icon: Icons.GitBranch, level: "Advanced", category: "Tools" },
    { name: "Responsive Design", icon: Icons.Layout, level: "Expert", category: "Tools" },
    { name: "Framer Motion", icon: Icons.Sparkles, level: "Intermediate", category: "Tools" },
    { name: "Vite", icon: Icons.Zap, level: "Advanced", category: "Tools" },
    { name: "Redux", icon: Icons.Box, level: "Intermediate", category: "Frontend" },
  ];

  const getLevel = (level) => {
    const map = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 60,
    };
    return map[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-green-500 bg-green-500/10 border-green-500/30",
      Advanced: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30",
      Intermediate: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-400/10 border-gray-400/30";
  };

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((s) => s.category === filter);

  const radarData = [
    { skill: "Frontend", value: 95 },
    { skill: "Backend", value: 85 },
    { skill: "UI/UX", value: 90 },
    { skill: "Tools", value: 80 },
    { skill: "Problem Solving", value: 92 },
  ];

  return (
    <section
      id="skills"
      className={`relative py-20 px-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <Icons.Sparkles className="mx-auto text-orange-500" />
          <h2 className="text-4xl font-bold">
            Skills & <span className="text-orange-500">Expertise</span>
          </h2>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 flex-wrap">
          {["All", "Frontend", "Backend", "Tools"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === item
                  ? "bg-orange-500 text-white"
                  : darkMode
                  ? "border-white/20"
                  : "border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SKILLS */}
          <div className="grid grid-cols-2 gap-4">
            {filteredSkills.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`relative p-5 rounded-2xl border group ${
                    darkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  {/* glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition" />

                  <Icon className="text-orange-500 text-2xl mb-2" />
                  <p className="font-medium">{skill.name}</p>

                  {/* LEVEL DIV (UPDATED) */}
                  <div className="mt-2">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </div>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="h-2 bg-gray-200/20 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${getLevel(skill.level)}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT RADAR */}
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <Radar
                  dataKey="value"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;