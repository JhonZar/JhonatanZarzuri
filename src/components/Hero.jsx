import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero bg-cover bg-center flex items-center justify-center text-white relative h-screen w-full">
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" translate="no">
          <Typewriter
            options={{
              strings: ['¡Hola! Soy Jhonatan Zarzuri'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
            }}
          />
        </h1>
        <p className="text-xl md:text-2xl mb-2">Desarrollador de Software</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://github.com/JhonZar" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/jhonatan-luis-zarzuri-chauca-32701a200/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
