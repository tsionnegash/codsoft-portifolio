import React from 'react';
import { Link } from 'react-scroll';
import ppicture from "../assets/images/photo_2024-08-23_17-27-12.jpg"; 

const Intro = () => {
  return (
    <div>
      <section id="intro" className="relative flex flex-col lg:flex-row justify-center items-center h-[120vh] bg-[#20252a] text-[#f8f8f2] p-20">
        
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
          
          <div className="relative w-full lg:w-3/5 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="absolute top-0 left-0 pt-6 text-3xl text-gray-600 lg:pl-10 font-bold">
              Hello, I'm Tsion
            </div>
            <div className="relative z-10 text-center lg:text-left lg:w-full lg:pl-10 pt-16">
              <h1 className="text-4xl lg:text-8xl font-bold leading-tight text-white font-serif">
                <span className="block mb-4">I create impactful web solutions</span>
                <span className="block mb-4">that captivate users and</span>
                <span className="block">drive business growth.</span>
              </h1>
            </div>
          </div>
          
          <div className="relative h-96 lg:h-[600px] w-full lg:w-2/5 flex justify-center">
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={ppicture}
                alt="Tinbite's Photo"
                className="rounded-full w-96 h-96 lg:w-[500px] lg:h-[500px] object-cover"
              />
              {/* <div className="absolute inset-0 border-4 border-gray-300 rounded-full lg:w-[500px] lg:h-[500px]"></div> */}
            </div>
          </div>
          
        </div>
        
      </section>
      
      <div className="flex justify-center py-8">
        <a
          href="resume/tsion negash.pdf"
          download="tsion negash.pdf"
          className="bg-[#20252a] text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#20252a] hover:bg-opacity-80 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4.5M12 16h0M21 15v-2a2 2 0 00-2-2h-1V7a2 2 0 00-2-2H8a2 2 0 00-2 2v4h-1a2 2 0 00-2 2v2m16 4v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4m-2 0h-2a2 2 0 01-2-2v-4m8 0h-2m6 0h-2m4 4h-2m-2-2v4m0-6h2m-2-2h2m0 6h2M7 12h10" />
          </svg>
          <span>Download My Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Intro;
