const MyJourney = ({ darkMode }) => {
  return (
    <section id="journey"
      className={`px-6 py-16 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My<span className="text-orange-500"> Journey</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* EXPERIENCE */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">💼 Experience</h3>

          <div
            className={`p-6 rounded-xl shadow-lg transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-2xl hover:shadow-orange-500/20
    ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <h4 className="font-semibold">
              Full Stack Developer (MERN) – Project Experience
            </h4>
            <p className="text-orange-500">Self-Initiated Projects</p>
            <p className="text-sm opacity-70 mb-3">2025 – Present</p>

            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Developed full-stack MERN applications</li>
              <li>Implemented authentication & CRUD operations</li>
              <li>Built responsive UI with React & Tailwind</li>
              <li>Used Redux and integrated APIs</li>
            </ul>
          </div>

          <div
            className={`mt-10 p-6 rounded-xl shadow-lg transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-2xl hover:shadow-orange-500/20
    ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <h4 className="font-semibold">Branch Relationship Manager</h4>
            <p className="text-orange-500">Innov Source Private Limited</p>
            <p className="text-sm opacity-70 mb-3">Jan 2018 – Feb 2022</p>

            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Handled banking sales operations</li>
              <li>Processed loan & credit documentation</li>
              <li>Maintained customer relationships</li>
              <li>Achieved sales targets consistently</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>

          <div
            className={`p-6 rounded-xl shadow-lg transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-2xl hover:shadow-orange-500/20
    ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <h4 className="font-semibold">
              B.E. Electrical and Electronics Engineering
            </h4>
            <p className="text-orange-500">
              Arunai Engineering College, Tiruvannamalai
            </p>
            <p className="text-sm opacity-70">2013 – 2017</p>
          </div>
        </div>

        {/* CERTIFICATES */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">📜 Certificates</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`p-6 rounded-xl shadow-lg transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-2xl hover:shadow-orange-500/20
    ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h4 className="font-semibold">Full Stack (MERN) Developer</h4>
              <p className="text-sm opacity-70">GUVI | HCL</p>
              <p className="text-orange-500 text-sm mt-1">April 2026</p>
            </div>

            <div
              className={`p-6 rounded-xl shadow-lg transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-2xl hover:shadow-orange-500/20
    ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h4 className="font-semibold">MERN Stack Developer</h4>
              <p className="text-sm opacity-70">Null Class Ed Tech Pvt Ltd</p>
              <p className="text-orange-500 text-sm mt-1">May 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
