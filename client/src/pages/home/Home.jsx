import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import mernimage from '../../assets/web1.avif';



function Home() {

  return (
    <>
      <div className='bg-cover bg-center text-center text-white bg-[#28405b] py-10 overflow-x-hidden' id='home'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="image-wrapper">
            <img
              src={mernimage}
              alt="mernimage"
              className=' mx-auto mb-8  h-80 w-auto rounded-md object-cover transfprm transition-transform duration-300 hover:scale-105'
            />
          </div>
          <h1 className='text-4xl font-bold mt-8'>
            Hi, I'm
            <span className='text-transparent bg-clip-text p-0 bg-gradient-to-r from-green-400 to-blue-500'> Ankush Kumar,</span>
            <br />
            a<span className='text-transparent bg-clip-text bg-gradient-to-r p-0 from-green-400 to-blue-500'>Mern </span>Stack Developer
          </h1>
          <p className=' mt-1 text-lg'><span className='text-sm text-white'>I build responsive web applications with </span> <br />
            <span className='text-sm text-white'>focus on performance and user experience</span> </p>
          <div className='mt-5 space-x-4'>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className='inline-block bg-gradient-to-r from-green-400 to-blue-400 text-black font-medium transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer'
            >
              Contact Me
            </Link>
            <a href="https://drive.google.com/file/d/1y80HCHMBziAXQCD0eMwSiTerxLe9IWyF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='bg-gradient-to-r from-green-400 to-blue-400 text-black font-medium transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Resume
              </button>
            </a>

          </div>
        </div>
      </div>
      {/* <div className='flex items-center justify-center bg-[#28405b] lg:h-[90vh]' id='home' >
        <div className='grid md:grid-cols-2 grid-cols-1 place-content-center gap-20 md:p-5 md:m-16 s:my-10 sm:py-10 s:px-4'>
          <div className='flex-1 border-4 border-solid border-red-800 h-96 max-w-96 bg-red-600 flex flex-col justify-center items-start p-4'>
            <h1>This is me Ankush</h1>
            <p>I am a web developer</p>
            <p>I am a web developer</p>
            <p>I am a web developer</p>
            <p>I am a web developer</p>
          </div>
          <div className=' border-4 border-solid border-red-800 h-96 max-w-96 bg-green-700'>
            <img
              src={mernimage}
              className='h-full w-full object-cover transfprm transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>
      </div> */}

    </>
  );
}

export default Home;
