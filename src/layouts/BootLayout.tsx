import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { BootScreen } from "../components/BootScreen";

export const BootLayout = () => {
  // 👇 initial state localStorage se derive
  const [booted, setBooted] = useState(() => {
    return localStorage.getItem("booted") === "true";
  });

  useEffect(() => {
    if (booted) return; // ✅ already booted, do nothing

    const timer = setTimeout(() => {
      setBooted(true);
      localStorage.setItem("booted", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, [booted]);

  if (!booted) return <BootScreen />;

  return <Outlet />;
};
