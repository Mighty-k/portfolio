// components/ui/Loader.jsx
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#fdf8f3" }}
      aria-hidden="true"
    >
      <div className="flex items-end justify-center space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "#6b8e6f" }}
            animate={{ scale: [1, 0.6, 1], opacity: [1, 0.6, 1] }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
