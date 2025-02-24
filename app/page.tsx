"use client";

import { useTheme } from "next-themes";
import Navbar from "./Components/Navbar/nav-bar";

export default function Home() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-200";

  return (
    <div className={`${bgColor} border min-h-screen w-full`}>
      <Navbar />
      <div className="grid grid-cols[3fr_1fr] px-6 mt-8 poppins gap-4"></div>
    </div>
  );
}
