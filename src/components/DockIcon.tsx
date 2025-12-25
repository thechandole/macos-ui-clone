import { useRef, useLayoutEffect, useState } from "react";
import type { DockItem } from "./Dock";
import { useMenuBar } from "../hooks/useMenuBar";
import '../App.css'

type Props = {
  item: DockItem;
  mouseX: number | null;
};

const ICON_SIZE = 48;
const MAX_SCALE = 1.8;
const RANGE = 100; // thoda smooth feel ke liye

export default function DockIcon({ item, mouseX }: Props) {
  const { setMenu } = useMenuBar();
  const iconRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    if (mouseX === null) {
      if (scale !== 1) setScale(1);
      return;
    }

    const el = iconRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - centerX);

    const newScale =
      distance < RANGE ? 1 + (1 - distance / RANGE) * (MAX_SCALE - 1) : 1;

    if (newScale !== scale) {
      setScale(newScale);
    }
  }, [mouseX, scale]);

  return (
    <div className="flex flex-col items-center text-white select-none">
      {/* ICON */}
      <div
        ref={iconRef}
        onClick={() => setMenu(item.label, item.menu)}
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          transform: `scale(${scale})`,
          transition: "transform 0.18s cubic-bezier(.25,.8,.25,1)",
        }}
        className="flex items-center justify-center"
      >
        <div className="w-full h-full">{item.icon}</div>
      </div>

      {/* 🔵 Active Dot */}
      {item.active && (
        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 animate-[dotIn_0.2s_ease-out]" />
      )}

      {/* LABEL */}
      <span className="text-[10px] opacity-60 mt-1">{item.label}</span>
    </div>
  );
}
