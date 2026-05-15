import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send ❌");
        },
      );
  };

  return (
    <section
      id="contact"
      className={`min-h-screen px-6 py-16 transition ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            📬 Contact <span className="text-orange-500">Me</span>
          </h2>
          <p className="opacity-70 mt-2">
            Let’s build something amazing together 🚀
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT INFO */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <a
                href="mailto:krcpriya@gmail.com"
                className="hover:text-orange-500 transition"
              >
                krcpriya@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <p>+91 9500597042</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <p>Ranipet-Vellore, TamilNadu, India</p>
            </div>

            <div
              className={`p-6 rounded-2xl mt-6 ${
                darkMode
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border"
              }`}
            >
              <p className="opacity-80">
                Seeking full-time opportunities as a Full Stack (MERN) Developer
                to contribute to scalable web applications and grow
                professionally.
              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-6 rounded-2xl backdrop-blur-md border ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/70 border-gray-200"
            }`}
          >
            {/* Name */}
            <div className="mb-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-transparent border outline-none focus:border-orange-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-transparent border outline-none focus:border-orange-500"
              />
            </div>

            <div className="mb-6">
              <input
                type="number"
                name="phone"
                placeholder="Your Phone Number"
                required
                className="w-full p-3 rounded-lg bg-transparent border outline-none focus:border-orange-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-transparent border outline-none focus:border-orange-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
