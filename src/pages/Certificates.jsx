const Certificates = ({ darkMode }) => {
  const certificates = [
    {
      title: "Full Stack (MERN) Developer",
      organization: "GUVI | HCL",
      date: "April 2026",
      description:
        "Completed full-stack MERN development training including React, Node.js, MongoDB, Express, APIs, and deployment.",
    },
    {
      title: "MERN Stack Developer",
      organization: "Null Class EdTech Pvt. Ltd.",
      date: "May 2025",
      description:
        "Built real-world MERN applications with authentication, CRUD operations, responsive UI, and API integration.",
    },
  ];

  return (
    <section
      id="certificates"
      className={`px-6 py-16 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My<span className="text-orange-500"> Certificates</span>
      </h2>

      {/* CERTIFICATES LIST */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg border transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.02]
              hover:shadow-2xl hover:shadow-orange-500/20
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
          >
            {/* ICON */}
            <div className="text-4xl mb-4">📜</div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2">
              {certificate.title}
            </h3>

            {/* ORGANIZATION */}
            <p className="text-orange-500 font-medium">
              {certificate.organization}
            </p>

            {/* DATE */}
            <p className="text-sm opacity-70 mt-1 mb-4">
              {certificate.date}
            </p>

            {/* DESCRIPTION */}
            <p className="text-sm leading-6 opacity-80">
              {certificate.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;