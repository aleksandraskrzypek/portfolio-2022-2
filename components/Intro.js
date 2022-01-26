import Image from "next/image";
import background from "../public/background-portfolio.jpg"
import {ChevronDownIcon} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

function Intro() {
    
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        console.log({active})
    };

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);


    return (
        <div className="w-full h-[20rem] sm:h-[55rem] relative" id="intro">
            <Image 
                src={background}
                alt=""
                className="object-center object-cover pointer-events-none"
                layout='fill'
            />


            <div className="relative z-1">

                <nav className="flex items-center justify-between flex-wrap bg-black fixed top-0 z-10 w-full p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-10 hover:text-gray-400 cursor-pointer">
                    <a href="#intro"><span class="font-semibold text-2xl tracking-tight">Aleksandra Skrzypek</span></a>
                    </div>

                    <div className="block md:hidden">
                        <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>

                    {(() => {
                    if (active === false) {
                        return (
                                <div className="w-full flex-grow md:flex md:items-center md:w-auto">
                                    <div className="text-base md:flex-grow">
                                        <a href="#aboutme" className="text-white hidden md:inline-block md:mt-0 mt-4 mr-4 hover:text-gray-400">O MNIE</a>
                                        <a href="#portfolio" className="text-white hidden md:inline-block md:mt-0 mt-4 mr-4 hover:text-gray-400">PORTFOLIO</a>
                                        <a href="#contact" className="text-white hidden md:inline-block md:mt-0 mt-4 mr-4 hover:text-gray-400">KONTAKT</a>
                                    </div>
                                </div>
                        )
                    } else if (active === true) {
                        return (
                                <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
                                    <div className="text-base md:flex-grow">
                                        <a href="#aboutme" className="block mt-4 mr-4 text-white md:inline-block md:mt-0 hover:text-gray-400">O MNIE</a>
                                        <a href="#portfolio" className="block mt-4 mr-4 text-white md:inline-block md:mt-0 hover:text-gray-400">PORTFOLIO</a>
                                        <a href="#contact" className="block mt-4 mr-4 text-white md:inline-block md:mt-0 hover:text-gray-400">KONTAKT</a>
                                    </div>
                                </div>
                        )
                    }
                    })()}
                </nav>

                <div className="flex items-center justify-center h-96 sm:visible invisible mt-20">
                    <div className="text-white flex flex-col items-center shadow-2xl backdrop-blur-sm">
                        <h1 className="text-7xl font-sans">Cześć!</h1>
                        <hr className="border-white w-60 m-4"/>
                        <h1 className="text-7xl font-sans mb-3">Jestem Ola</h1>
                        <a href="#aboutme"><ChevronDownIcon className="h-8 w-8 cursor-pointer hover:text-gray-400 transition ease-in-out hover:-translate-y-1 hover:scale-110" /></a>
                    </div>
                </div>
        


                
            </div>
        </div>
    )
}

export default Intro