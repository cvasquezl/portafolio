import react from "react";
import Link from "next/link";


const Headers = () =>{
    return(
        <header className="flex flex-row justify-between px-3 py-3 bg-[#FFE2E2] fixed w-screen top-0 z-40">
            <h1 className="text-[#AAAAAA] text-3xl font-mergin">Mi portafolio</h1>
            <nav >
                <ul className="flex flex-row justify-between gap-3 mx-3">
                    <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md"> <Link href={"#About"}>Acerca</Link> </li>
                    <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md"> <Link href={"#Project"}>Proyectos</Link> </li>
                    <li className="text-white font-semibold bg-[#AAAAAA] border-2 border-transparent hover:border-[#AAAAAA] hover:bg-[#FFC7C7] hover:text-[#AAAAAA] transition-colors duration-500 py-2 p-2 rounded-md"> <Link href={"#Contact"}>Contancto</Link> </li>
                    </ul>
                    
            </nav>
        </header>
    )
}

export default Headers;