import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

const LogoApp = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo */}
      <div className="bg-primary size-10 text-lg text-white rounded-xl flex justify-center items-center">
        <FaProjectDiagram />
      </div>

      {/* Container for the name */}
      <div className="flex gap-1 items-center text-xl">
        <span className="font-bold"> Pro</span>
        <span>Kanban</span>
      </div>
    </div>
  );
};

export default LogoApp;
