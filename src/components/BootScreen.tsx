import { motion } from "framer-motion";
import { AppleLogo } from "./AppleLogo";

export const BootScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AppleLogo size={80} />
      </motion.div>

      <div className="mt-6 h-1 w-40 bg-neutral-700 rounded overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
