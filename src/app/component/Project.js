"use client";
import React from "react";

const Project = () => {
  return (
<section className="flex flex-col mt-4 bg-[#808D7C] rounded-md relative z-10" id="Project">

<div className="flex w-full flex-row justify-center text-center text-4xl text-white font-semibold z-20 relative">
  <h1>Proyectos</h1>
</div>
<div className="grid grid-cols-12 h-[600px] mt-3 rounded-2xl sombra relative z-10">
  <div className="col-span-3 bg-[#FAF3F0] rounded-l-lg relative z-30">
    <h1 className="Tamañof text-9xl absolute text-[#F2D8D8] -z-10 font-mono">
      01
    </h1>
    <div className="p-10">
      <h1 className="text-center mt-16 text-2xl text-[#65647C] font-bold">
        Busqueda + Api-de-busqueda
      </h1>
      <p className="mt-3 text-pretty text-center">
        Este componente React es una aplicación de búsqueda que permite
        filtrar una lista de ciudades en función de varios criterios
        (ciudad, IATA, región) y muestra los resultados en una interfaz
        amigable. Utiliza Axios para obtener los datos de una API externa,
        y emplea hooks de React para manejar el estado y los efectos
        secundarios.
      </p>
      <p className="mt-7 flex flex-row gap-2">
        Tags:
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg"
        />
      </p>
    </div>
  </div>
  <div className="col-span-3 bg-[#D4E2D4] relative z-30">
    <h1 className="Tamañof text-9xl absolute text-[#F2D8D8] -z-10 font-mono">
      02
    </h1>
    <div className="p-10">
      <h1 className="text-center mt-20 text-2xl text-[#65647C] font-bold">
        Balance
      </h1>
      <p className="mt-3 text-pretty text-center">
        Este proyecto es una aplicación de gestión de finanzas personales
        que permite a los usuarios llevar un seguimiento de sus
        transacciones y calcular el balance total. La aplicación está
        diseñada para ser fácil de usar y actualizar automáticamente la
        lista de transacciones y el balance total cada vez que se agrega o
        modifica una transacción.
      </p>
      <p className="mt-7 flex flex-row gap-2">
        Tags:
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg"
        />
      </p>
    </div>
  </div>
  <div className="col-span-3 bg-[#FFCACC] relative z-30">
    <h1 className="Tamañof text-9xl absolute text-[#F2D8D8] -z-10 font-mono">
      03
    </h1>
    <div className="p-10">
      <h1 className="text-center mt-20 text-2xl text-[#65647C] font-bold">
        dailytasks
      </h1>
      <p className="mt-3 text-pretty text-center">
        "dailytasks" es una aplicación web diseñada para gestionar tareas
        diarias de manera eficiente. Desarrollada con React, esta
        aplicación permite a los usuarios navegar entre diferentes
        secciones, incluyendo una galería de tareas y un formulario para
        la creación de nuevas tareas. La interfaz es intuitiva y está
        estilizada con CSS para ofrecer una experiencia de usuario
        agradable
      </p>
      <p className="mt-7 flex flex-row gap-2">
        Tags:
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg"
        />
      </p>
    </div>
  </div>
  <div className="col-span-3 bg-[#DBC4F0] rounded-r-lg relative z-30">
    <h1 className="Tamañof absolute text-[#F2D8D8] -z-10 font-mono">
      04
    </h1>
    <div className="p-10">
      <h1 className="text-center mt-20 text-2xl text-[#65647C] font-bold">
        proyectProductIPP
      </h1>
      <p className="mt-3 text-pretty text-center">
        El repositorio proyectProductIPP de GitHub contiene diversos
        proyectos de trabajos de asignatura de programación web. Entre los
        directorios se encuentran clasesphp, fibonacci, laravel, m3, y
        otros relacionados con noticias. El proyecto incluye código en
        PHP, CSS, HTML y JavaScript.
      </p>
      <p className="mt-[76px] flex flex-row gap-2">
        Tags:
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/php.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg"
        />
        <img
          height="32"
          width="32"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg"
        />
      </p>
    </div>
  </div>
</div>
<div className="w-full flex  justify-end p-5 text-white items-center relative z-20">
  <a href="https://github.com/cvasquezl" className="flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
    <h3 className="p-2 text-2xl ">Saber más</h3>
    <img className="icono  " src="./images/icono.svg" />
  </a>
</div>
</section>
  );
};

export default Project;
