import { Star, Download } from "lucide-react";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import { SiExpressdotcom, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import image from '../assets/image2.png'

const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      icon: instagram,
      alt: "Instagram",
      hover: "hover:bg-red-500",
      link: "https://instagram.com",
    },
    {
      icon: github,
      alt: "GitHub",
      hover: "hover:bg-black",
      link: "https://github.com",
    },
  ];

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

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`min-h-screen flex items-center ${theme.bg}`}>
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-8 mb-5">
          {socialIcons.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className={`p-2 rounded-full transition hover:scale-110 ${item.hover}`}
            >
              <img src={item.icon} alt={item.alt} className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* NAME */}
            <h2 className={`text-xl mb-2 ${theme.textSecondary}`}>Hi, I'm</h2>

            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 ${theme.textPrimary}`}
            >
              Chittra Priya 👋
            </h1>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-orange-500/10 border border-orange-500/20 rounded-full">
              <Star className="w-4 h-4 text-orange-500" />
              <span className={`text-sm ${theme.textSecondary}`}>
                MERN Stack Developer | React Enthusiast | Building Real-World
                Web Applications
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className={`mb-8 max-w-xl ${theme.textSecondary}`}>
              Building modern, responsive, scalable and modern web applications
              using React.js, Node.js, Express.js, and MongoDB.Passionate about
              creating user-friendly digital experiences and solving real-world
              problems through clean code.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">
              {/* CONTACT BUTTON (FULL ORANGE) */}
              <button
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
              >
                Contact Me
              </button>

              {/* DOWNLOAD CV */}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 border-2 border-orange-500 px-6 py-3 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                <Download size={18} />
                Download CV
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

    {/* OUTER ROTATING BORDER RING */}
    <div className="absolute -inset-[3px] rounded-none animate-spin">
      <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent,orange,transparent,transparent)]"></div>
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
      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"><SiReact className="text-blue-500 text-2xl" /></div>
      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"><SiNodedotjs className="text-green-600 text-2xl" /></div>
      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"><SiExpressdotcom className="text-orange-600 dark:text-orange-400 text-2xl" /></div>
      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"><SiTailwindcss className="text-sky-500 text-2xl" /></div>
      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"><SiMongodb className="text-green-500 text-2xl" /></div>
    </div>

  </div>
</div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
