import Image from "next/image";
import clicked from "../public/clicked.jpg"
import googleclone from "../public/googleclone.jpg"
import hboclone from "../public/hbo-clone.jpg"
import netflixclone from "../public/netflixclone.jpg"
import norwegia from "../public/norwegia.jpg"
import portfoliowakacje from "../public/portfolio-wakacje.jpg"
import quizapp from "../public/quizapp.jpg"
import shop from "../public/shop.jpg"
import spotify from "../public/spotify1.jpg"
import todoapp from "../public/todoapp.jpg"
import weatherapp2 from "../public/weathe-app-2.0.jpg"
import weatherapp from "../public/weatherapp.jpg"

import GitHubIcon from  '@material-ui/icons/GitHub';

import background from "../public/background-portfolio.jpg"



function Portfolio() {



    return (
        <div id="portfolio" className="bg-black">


            <div className="w-full h-[10rem] md:h-[15rem] relative mb-20">
                <Image 
                    src={background}
                    alt=""
                    layout='fill'
                    className="object-center object-cover pointer-events-none blur-sm"
                />

                <div className="relative z-1">
                    <h1 className="text-white text-5xl pt-20 text-center">PORTFOLIO:</h1>
                </div>

            </div>


            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-20 pb-10 ">

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={clicked}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Clicked App</h1>
                        <p className="pb-3 text-center text-xs">Prosty clicked, po osiągnięciu określonej ilości warzyw bądź owoców pojawiąją się kolejne okienka z droższymi produktami.</p>
                        <a href="https://github.com/aleksandraskrzypek/clicked"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={googleclone}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Google Clone</h1>
                        <p className="pb-3 text-center  text-xs">Klon wyszukiwarki Google, projekt napisany w ramach nauki podstaw React'a z kanałem Clever Programmer. Pozwala wyszukać konkretne zagadnienie i przekierowywuje na wybraną stronę.</p>
                        <a href="https://github.com/aleksandraskrzypek/google-clone"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={hboclone}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">HBO clone</h1>
                        <p className="pb-3 text-center text-xs">Klon platformy HBO, napisany przy pomocy projektu Netflix-clone. Wyświetla filmy oraz seriale z wybranych kategorii.</p>
                        <a href="https://github.com/aleksandraskrzypek/hbo-clone"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={netflixclone}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Netflix clone</h1>
                        <p className="pb-3 text-center text-xs">Klon platfrormy Netflix, projekt napisany w ramach nauki podstaw React'a z kanałem Clever Programmer. Przeszukuje aktualne trendy oraz włącza zwiastuny produkcji.</p>
                        <a href="https://github.com/aleksandraskrzypek/netflix-clone"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>
                
                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={norwegia}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Norwegia</h1>
                        <p className="pb-3 text-center text-xs">Strona internetowa - wykorzystuje JS'a, CSS'a oraz HTML'a. Projekt napisany na zaliczenie przedmiotu.</p>
                        <a href="https://github.com/aleksandraskrzypek/norwegia"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={portfoliowakacje}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Portfolio</h1>
                        <p className="pb-3 text-center text-xs">Poprzednia strona z portfolio.</p>
                        <a href="https://github.com/aleksandraskrzypek/aleksandraskrzypek"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={quizapp}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Quiz App</h1>
                        <p className="pb-3 text-center text-xs">Aplikacja oparta na Uniwersum Harrego Pottera. Poprzez udzielenie odpowiedzi na kilkanaście pytań dopasowywuje użytkownika do jednego z czterech domów w Hogwarcie.</p>
                        <a href="https://github.com/aleksandraskrzypek/quizzapp"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={shop}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Shop App</h1>
                        <p className="pb-3 text-center text-xs">Aplikacja symulująca dodawanie produktów do koszyka, ponadto zlicza ona ceny poszczególnych ilości oraz sumę łączną.</p>
                        <a href="https://github.com/aleksandraskrzypek/shop-app"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={spotify}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Spotify Clone</h1>
                        <p className="pb-3 text-center text-xs">Strona napisana w ramach nauki Next.js, wykorzystuje: Middleware, Spotify API, Tailwind, NextAuth, Recoil</p>
                        <a href="https://github.com/aleksandraskrzypek/spotify-clone"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={todoapp}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">ToDo App</h1>
                        <p className="pb-3 text-center text-xs">Aplikacja napisana w ramach rekrutacji. Umożliwia logowanie/rejestracje użytkownika do swojego profilu, a później przeglądanie swoich todo-list, dodawania ich, modyfikowanie.</p>
                        <a href="https://github.com/aleksandraskrzypek/"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={weatherapp2}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Weather App 2.0</h1>
                        <p className="pb-3 text-center text-xs">Aplikacja, która umożliwia sprawdzenie pogody w mieście, które nas najbardziej interesuje. Napisana w React'cie przy wykorzystaniu React Hook oraz API ze strony openweathermap.org. Ładniejsze css'y.</p>
                        <a href="https://github.com/aleksandraskrzypek/weather-app-2.0"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>

                <div className="relative group transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Image 
                        src={weatherapp}
                        alt=""
                    />
                    <div className="p-3 bg-opacity-90 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 flex flex-col items-center bg-gray-800 text-white font-semibold">
                        <h1 className="text-xl pb-1">Weather App</h1>
                        <p className="pb-3 text-center text-xs">Aplikacja, która umożliwia sprawdzenie pogody w mieście, które nas najbardziej interesuje. Napisana w React'cie przy wykorzystaniu React Hook oraz API ze strony openweathermap.org.</p>
                        <a href="https://aleksandraskrzypek.github.io/weather-app"><GitHubIcon className="cursor-pointer w-10 h-10"/></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio
