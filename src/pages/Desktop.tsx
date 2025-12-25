import { useState, useRef } from "react";
import FolderWindow from "../components/FolderWindow";
import Dock from "../components/Dock";
import "../App.css";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import MacFolderIcon from "../components/MacFolderIcon";

export default function Desktop() {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const constrain = useRef(null);

  return (
    <div>
      <Navigation />

      <div
        ref={constrain}
        className="fixed inset-0 bg-cover bg-center select-none"
        style={{
          backgroundImage: "url('/Desktop.jpg')",
        }}
      >
        {/* 🔥 CENTER TEXT OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight">
              Hi, I'm <span className="text-white/90">Akash Chandole</span>
            </h1>
            <p className="mt-3 text-white/70 text-xl">
              Welcome to My Portfolio
            </p>
          </motion.div>
        </div>

        {/* 🖥 DESKTOP ICONS */}
        <div className="p-6">
          <motion.button
            drag
            dragConstraints={constrain}
            onDoubleClick={() => setIsFolderOpen(true)}
            className="flex flex-col items-center gap-1 text-white"
          >
            <MacFolderIcon size={50} />
            <span className="text-sm">My Folder</span>
          </motion.button>
        </div>
      </div>

      {/* Folder Window */}
      {isFolderOpen && <FolderWindow onClose={() => setIsFolderOpen(false)} />}

      {/* Dock */}
      <Dock />
    </div>
  );
}
