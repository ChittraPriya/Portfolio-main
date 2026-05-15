import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="
        fixed bottom-6 right-6 z-50
        backdrop-blur-lg bg-white/20 dark:bg-white/10
        border border-white/30
        shadow-lg
        p-3 rounded-full
        text-gray-800 dark:text-white
        hover:bg-orange-500 hover:text-white
        transition duration-300
      "
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;