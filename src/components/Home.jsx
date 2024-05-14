import React from "react";
import { Link } from "react-router-dom";
import Foto from "../assets/bg.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import Kelebek from "../assets/Kelebek.mp3";
import Siir from "../assets/Siir.mp3";
import Hanımefendi from "../assets/Hanımefendi.mp3";

function Home() {
  const musics = [
    {
      name: "Kelebek",
      audio: Kelebek,
    },
    {
      name: "Siir",
      audio: Siir,
    },
    {
      name: "Hanımefendi",
      audio: Hanımefendi,
    },
  ];

  // const clickHnadler = (ses) => {
  //   const müzik = new Audio(ses);
  //   müzik.play();
  // };
  return (
    <div className="bg-custom3 min-h-screen">
      {/* {musics.map((muzik, id) => {
        return (
          <div key={id}>
            <h1
              key={id}
              className="cursor-pointer"
              onClick={() => clickHnadler(muzik.audio)}
            >
              {muzik.name}
            </h1>
          </div>
        );
      })} */}

      <div className="flex justify-center items-center">
        <div className="border border-custom1 md:w-96 md:h-96 h-52 w-52 rounded-full  bg-custom1 shadow-lg shadow-custom2 md:mt-4 mt-8 relative ">
          <img
            src={Foto}
            className="w-full h-full scale-125 rounded-full md:left-2 object-cover absolute md:bottom-[47px] bottom-7"
            alt="Logo"
          />
        </div>
      </div>
      <div className="text-center bg-custom2 w-fit mx-auto md:p-12 p-3 rounded-md mt-4">
        <h1 className="md:text-6xl text-4xl text-custom3 font-extrabold font-Coder ">
          BARAN ÇİÇEK
        </h1>
        <h6 className="md:text-2xl text-xl font-extrabold font-Pacifico p-2 text-custom3 shadow-md mb-3 shadow-custom1">
          Full Stack Web Developer
        </h6>
        <div className="flex items-center justify-center gap-4 ">
          <a
            href="https://www.instagram.com/baranncicek19/"
            target="_blank"
            className="border rounded-full p-2 hover:bg-white duration-200"
          >
            <RiInstagramFill
              className="text-custom4 hover:text-custom1"
              size={36}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cicekbaran/"
            target="_blank"
            className="border rounded-full p-2 hover:bg-white duration-200"
          >
            <FaLinkedin className="text-custom4 hover:text-custom1" size={36} />
          </a>
          <a
            href="https://github.com/Rainclover8"
            target="_blank"
            className="border rounded-full p-2 hover:bg-white duration-200"
          >
            <FaSquareGithub
              className="text-custom4 hover:text-custom1 duration-200"
              size={36}
            />
          </a>
        </div>
        <button className="border border-custom1 md:p-4 p-2 md:text-2xl text-xl rounded-full bg-custom1 text-custom4 mt-4 font-extrabold font-Jersey ">
          <Link to="about/">About Me!</Link>
        </button>
      </div>
      {/* <div className="grid md:grid-cols-2">
        <div className="flex justify-center items-center flex-col text-custom4 text-center">
          <h1 className="md:text-9xl text-xl">Merhaba👋</h1>
          <h2 className="md:text-6xl text-2xl">
            Ben <span className="text-custom3">Baran Çiçek</span>
          </h2>
          <div className="flex gap-5 mt-2 justify-center items-center">
            <button className="border p-2 rounded-md bg-dark3 text-custom3 text-3xl">
             <Link to="hire/"> HIRE ME!</Link>
            </button>
            <button className="border p-2 rounded-md ">
              <Link to="portfolio/">PORTFOLİO</Link>
            </button>
          </div>
        </div>
        
      </div> */}
      {/* <div className="flex justify-around ">
        <div className="">
          <ul>
            <li className="rotate-12 text-3xl bg-dark text-dark3 p-2 rounded hover:rotate-0 duration-700 font-Jersey  mb-3">
              Anasayfa
            </li>
            <li className="rotate-12 text-3xl bg-dark text-dark3 p-2 rounded hover:rotate-0 duration-700 font-Jersey  mb-3">
              Anasayfa
            </li>
            <li className="rotate-12 text-3xl bg-dark text-dark3 p-2 rounded hover:rotate-0 duration-700 font-Jersey mb-3">
              Anasayfa
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="-rotate-12 text-3xl bg-dark text-dark3 p-2 rounded hover:rotate-0 duration-700 font-Jersey mb-3">
              About Me!
            </li>
            <li className="-rotate-12 text-3xl bg-dark text-dark3 p-2 rounded hover:rotate-0 duration-700 font-Jersey mb-3">
              About Me!
            </li>
            <li className="-rotate-12 text-3xl bg-dark text-dark3 p-2 rounded hover:rotate-0 duration-700 font-Jersey mb-3">
              About Me!
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
