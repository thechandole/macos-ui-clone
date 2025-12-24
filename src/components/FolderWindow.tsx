import { useRef, useState } from "react";

type Props = {
  onClose: () => void;
};

export default function DraggableWindow({ onClose }: Props) {
  const windowRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 200, y: 120 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  /* ================= Mouse Down ================= */
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);

    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  /* ================= Mouse Move ================= */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  /* ================= Mouse Up ================= */
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={windowRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        left: position.x,
        top: position.y,
      }}
      className="absolute w-[700px] h-[500px] bg-neutral-900/90 backdrop-blur-md rounded-xl shadow-2xl text-white flex flex-col select-none"
    >
      {/* ===== Title Bar (DRAG AREA) ===== */}
      <div
        onMouseDown={handleMouseDown}
        className="flex items-center gap-2 px-3 py-2 border-b border-white/10 cursor-move"
      >
        <button
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-red-500"
        />
        <div className="text-sm opacity-80">Resume.pdf</div>
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 overflow-hidden p-2">
        <iframe
          src="/Resume.pdf"
          className="w-full h-full rounded-md"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
