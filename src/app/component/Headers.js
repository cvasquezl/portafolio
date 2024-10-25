"use client"; 

import React, { useState } from "react";
import Link from "next/link";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-row justify-between items-center px-3 py-3 bg-[#FFE2E2] fixed w-screen top-0 z-40">
      <h1 className="text-[#AAAAAA] text-3xl font-mergin">Mi portafolio</h1>
      
      {/* Icono de hamburguesa */}
      <button 
        className="md:hidden p-2" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* Icono de hamburguesa (3 líneas) */}
        <div className="w-6 h-1 bg-[#AAAAAA] mb-1"></div>
        <div className="w-6 h-1 bg-[#AAAAAA] mb-1"></div>
        <div className="w-6 h-1 bg-[#AAAAAA]"></div>
      </button>

      {/* Caja del menú */}
      {menuOpen && (
        <div className="absolute top-14 right-0 w-48 bg-[#FFE2E2] shadow-lg p-4 rounded-md md:hidden">
          <ul className="flex flex-col gap-3">
            <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md">
              <Link href={"#About"}>Acerca</Link>
            </li>
            <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md">
              <Link href={"#Project"}>Proyectos</Link>
            </li>
            <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md">
              <Link href={"#Contact"}>Contacto</Link>
            </li>
          </ul>
        </div>
      )}

      <nav className="hidden md:flex md:gap-3">
        <ul className="flex flex-row justify-between gap-3 mx-3">
          <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md">
            <Link href={"#About"}>Acerca</Link>
          </li>
          <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md">
            <Link href={"#Project"}>Proyectos</Link>
          </li>
          <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md">
            <Link href={"#Contact"}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
