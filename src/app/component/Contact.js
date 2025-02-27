import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col mt-4 w-full bg-[url('/images/3.jpg')] bg-cover bg-center" id="Contact">
      <div className="w-full flex justify-center">
        <img className="rotate-6 p-5 w-[350px] md:w-[450px] animate-swing" src="./images/contact3.png" />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 bg-[#FFEAD2] items-center py-10 rounded-[95px] border-dashed border-8 border-[#FFC7C7] mb-4 md:mb-0">
          <div className="flex justify-center w-full text-center">
            <img
              height="50"
              width="50"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/maildotru.svg"
            />
            <h3 className="text-2xl items-center">Mail</h3>
          </div>
          <p className="text-xl">cvasquezlarenas08@gmail.com</p>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 bg-[#DBDFEA] items-center py-10 rounded-[95px] border-dashed border-8 border-[#A0C3D2] mb-4 md:mb-0">
          <div className="flex justify-center w-full text-center">
            <a className="flex justify-center transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-125" href="https://github.com/cvasquezl">
              <img
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
              />
              <h3 className="text-2xl items-center">GitHub</h3>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 bg-[#ACB1D6] items-center py-10 rounded-[95px] border-dashed border-8 border-[#C8E8ED] mb-4 md:mb-0">
          <div className="flex justify-center w-full text-center">
            <a className="flex justify-center transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-125" href="https://www.linkedin.com/in/camila-vasquez-larenas-907787235/">
              <img
                height="50"
                width="50"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
              />
              <h3 className="text-2xl items-center">LinkedIn</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
