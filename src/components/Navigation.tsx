import { useEffect, useState } from "react";
import { Wifi, BatteryCharging, Search, BatteryMediumIcon, } from "lucide-react";
import { useMenuBar } from "../hooks/useMenuBar";

export default function Navigation() {

  const [battery, setBattery] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean>(false);

  /* ===== Live Time ===== */
  const [dateTime, setDateTime] = useState<string>("");

     const { appName, menuItems } = useMenuBar();

useEffect(() => {
  const updateDateTime = () => {
    const now = new Date();

    const formatted = now.toLocaleString("en-US", {
      weekday: "short", // Wed
      day: "2-digit",   // 24
      month: "short",   // Dec
      hour: "2-digit",  // 10
      minute: "2-digit",
      hour12: true,    // macOS style
    });

      setDateTime(formatted.replace(/,/g, ""));
  };

  updateDateTime();
  const interval = setInterval(updateDateTime, 1000);
  return () => clearInterval(interval);
}, []);
  /* ===== Battery API (Typed) ===== */
  useEffect(() => {
  if (!navigator.getBattery) return;

  navigator.getBattery().then((battery) => {
    const updateBattery = () => {
      setBattery(Math.round(battery.level * 100));
      setCharging(battery.charging);
    };

    updateBattery();

    battery.addEventListener("levelchange", updateBattery);
    battery.addEventListener("chargingchange", updateBattery);
  });
}, []);


  return (
    <div className="fixed top-0 left-0 right-0 h-7 px-4 
                    flex items-center justify-between
                    bg-black/30 backdrop-blur-md
                    text-white text-sm z-50">

      {/* LEFT (Dynamic) */}
      <div className="flex items-center gap-4 font-medium">
        <span className="text-lg"></span>
        <span>{appName}</span>

        {menuItems.map((item) => (
          <span key={item.label}>{item.label}</span>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Wifi size={16} />

        <Search className="flex items-center" size={15}/>

        <div className="flex items-center gap-2">
          {charging ? (
            <BatteryCharging size={18} />
          ) : (
            <BatteryMediumIcon size={18} />
          )}
          
          <span className="text-xs">
            {battery !== null ? `${battery}%` : "--%"}
          </span>
        </div>
        

        <span className="tracking-tight gap-4">{dateTime}</span>

      </div>
    </div>
  );
}
