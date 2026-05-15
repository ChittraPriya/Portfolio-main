import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* LEFT */}
        <p className="text-sm">
          © {new Date().getFullYear()} Chittra Priya. All rights reserved.
        </p>

        {/* CENTER */}
        <p className="text-sm text-center">
          Full Stack Developer | Open to full-time opportunities 
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="text-orange-500" />
            <a
              href="mailto:krcpriya@gmail.com"
              className="hover:text-orange-500 transition text-sm"
            >
              krcpriya@gmail.com
            </a>
          </div>

          {/* 🔥 CTA BUTTON */}
          <a
            href="mailto:krcpriya@gmail.com"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Schedule a Call
          </a>

        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4">
          <a
            href="https://github.com/ChittraPriya"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/chittra-priya-k-136b77134"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;