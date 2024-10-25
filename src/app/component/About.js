import React from "react";
import TetrixFondo from "./Tetrix";

const About = () => {
  return (
    <section
      className=" grid grid-cols-12 relative mt-12 bg-[url('/images/3.jpg')] bg-cover bg-center  "
      id="About"
    >
      <div className="relative  col-span-12 md:col-span-6 bg-gradient-to-r p-4 md:p-8 lg:p-12 ">
        <div className="absolute top-10 left-1 z-20 p-4 md:p-8 lg:p-12" >
          <img className="rotate-90" height="60" width="60" src="./images/clip.svg" />
        </div>
        <div className=" flex flex-col items-center md:flex-row relative z-10 ">
          <img
            src="./mi.jpg"
            alt="mi"
            width={400}
            className="rounded-full  -rotate-12 pl-5"
          />

          <div className="mt-4  md:mt-0 text-center md:text-left ">
            <h2 className="text-3xl md:text-4xl text-[#8C7676] bg-[#C8FFD4] border-dashed border-8 border-[#FFC7C7] p-2 rounded-md drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)]">
              Camila Vasquez <br /> Larenas
            </h2>
            <h4 className="mt-2 text-lg md:text-xl text-[#8C7676] bg-[#ECC5FB] border-dashed border-8 border-[#A0C3D2] p-2 rounded-md drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)]">
              Programadora Frotend
            </h4>
          </div>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-6 text-[#AAAAAA] bg-gradient-to-l from-[#FFE2E2] flex justify-center md:justify-end items-center p-4">
        <p className="text-3xl md:text-5xl lg:text-7xl font-mergin text-center md:text-right">
          Programar es mi diversión, ¿me unes al juego?
        </p>
      </div>
    </section>
  );
};

export default About;
