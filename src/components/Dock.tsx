import { useRef, useState } from "react";
import DockIcon from "./DockIcon";


import type { ReactNode } from "react";

export type DockItem = {
  label: string;
  icon: ReactNode;
  menu: { label: string }[];
  active?: boolean;
};




// eslint-disable-next-line react-refresh/only-export-components
export const dockItems: DockItem[] = [
  {
    label: "Finder",
    icon: "🗂️",
    menu: [
      { label: "File" },
      { label: "Edit" },
      { label: "View" },
    ],
  },
  {
    label: "Preview",
    icon: "📄",
    menu: [
      { label: "File" },
      { label: "Edit" },
      { label: "View" },
      { label: "Window" },
    ],
  },
  {
    label: "Browser",
    icon: "🧭",
    menu: [
      { label: "File" },
      { label: "Edit" },
      { label: "View" },
    ],
  },
  {
    label: "Trash",
    icon: "🗑️",
    menu: [
      { label: "File" },
      { label: "Edit" },
      { label: "View" },
      { label: "Window" },
    ],
  },
];



export default function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div
        ref={dockRef}
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => setMouseX(null)}
        className="flex gap-4 px-4 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
      >
        {dockItems.map((item) => (
          <DockIcon
            key={item.label}
            item={item}
            mouseX={mouseX}
            // @ts-ignore: dockRef not declared in DockIcon props (add it to DockIcon Props instead to fix properly)
            dockRef={dockRef}
          />
        ))}
      </div>
    </div>
  );
}
