import React from "react";
import TetrixFondo from "./Tetrix";

const About = () => {
  return (
    <section
      className=" grid grid-cols-12 relative mt-12 bg-[url('/images/3.jpg')] bg-cover bg-center "
      id="About"
    >
      <div className="relative  col-span-12 md:col-span-6 bg-gradient-to-r ">
        <div className="absolute top-10 left-1 z-20">
          <img className="rotate-90" height="60" width="60" src="./images/clip.svg" />
        </div>
        <div className=" flex items-center relative  z-10">
          <img
            src="./mi.jpg"
            alt="mi"
            width={400}
            className="rounded-full p-3 -rotate-12 pl-5"
          />

          <div className="ml-8">
            <h2 className="absolute top-52 left-80 drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)] text-4xl text-[#8C7676] bg-[#C8FFD4] border-dashed border-8 border-[#FFC7C7] p-2 rounded-md">
              Camila Vasquez <br /> Larenas
            </h2>
            <h4 className="absolute top-[47vh] drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)]  left-80 text-xl text-[#8C7676]  bg-[#ECC5FB] border-dashed border-8 border-[#A0C3D2]  p-2 rounded-md">
              Programadora Frotend
            </h4>
          </div>
        </div>
      </div>
      <div className=" flex col-span-12 md:col-span-6 text-[#AAAAAA] bg-gradient-to-l from-[#FFE2E2] justify-end items-center">
        <p className="text-7xl pl-3 font-mergin mr-2">
          Programar es mi diversión, ¿me unes al juego?
        </p>
      </div>
    </section>
  );
};

export default About;
