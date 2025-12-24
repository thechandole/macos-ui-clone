import { useState, useRef } from "react";
import FolderWindow from "../components/FolderWindow";
import Dock from "../components/Dock";
import "../App.css";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";


export default function Desktop() {
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const constrain = useRef(null);

  return (
    <div>
      <Navigation/>
      

      <div
        ref={constrain}
        className="fixed inset-0 bg-cover bg-center select-none bg-initail-gray-500:30 to-gray"
        style={{
          backgroundImage: "url('/Desktop.jpg')", // 👈 public folder me image rakho
        }}
      >
        {/* Desktop Icons */}
        <div className="p-6 mt-5">
          <motion.button
            drag
            whileDrag={{ scale: 1.1 }}
            dragConstraints={constrain}
            onDoubleClick={() => setIsFolderOpen(true)}
            className="flex flex-col items-center text-white w-20"
          >
            📁
            <span className="text-sm mt-1">My Folder</span>
          </motion.button>
          
        </div>

        {/* Folder Window */}
        {isFolderOpen && (
          <FolderWindow onClose={() => setIsFolderOpen(false)} />
        )}

        {/* Dock */}
        <Dock />
      </div>
    </div>
  );
}
