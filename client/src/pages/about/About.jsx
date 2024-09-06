import React from 'react'
import mernimage from '../../assets/MERN-Stack.jpg'
import myimage from '../../assets/myimage.jpg'

function About() {
  return (
    <>
     <div
        className='bg-cover bg-center text-center   text-white py-10 bg-[#28405b]' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24  '>
          <h2 className='text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 '>About me</h2>
          <div className='flex flex-col lg:flex-row items-center md:space-x-12 '>
          <img src={myimage} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0 s:w-48 s:rounded-full s:h-48 justify-self-center m:mb-10' />
            <div className='flex-1'>
              <p className="text-lg mb-8  text-justify">As a skilled MERN stack developer, I bring a strong foundation in building dynamic and responsive web applications. My technical expertise is complemented by excellent communication skills, enabling me to effectively convey complex ideas to both technical and non-technical stakeholders. I possess a keen problem-solving ability, allowing me to tackle challenges with innovative solutions. My experience in team collaboration ensures smooth project execution, and my leadership skills empower teams to achieve their best work. I am passionate about creating efficient, scalable applications that meet user needs and drive business success.</p>
              <div className='space-y-4 '>

                <div className='flex items-center gap-3'>
                  <label htmlFor="html$css" className='lg:w-2/12 w-3/12 text-justify font-bold text-[#cb7676]' >Frontend</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-amber-700 to-blue-200 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12 '></div>
                  </div>
                </div>

                <div className='flex items-center  gap-3'>
                  <label htmlFor="html$css" className='lg:w-2/12 w-3/12 text-justify font-bold text-[#cb7676]'>Backend</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-amber-700 to-blue-200 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12 '></div>
                  </div>
                </div>
                <div className='flex items-center  gap-3'>
                  <label htmlFor="html$css" className='lg:w-2/12 w-3/12 text-justify font-bold text-[#cb7676]'>Database</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-amber-700 to-blue-200 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12 '></div>
                  </div>
                </div>
                <div className='flex items-center  gap-3'>
                  <label htmlFor="html$css" className='lg:w-2/12 w-3/12 text-justify font-bold text-[#cb7676]'>Softskill</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-amber-700 to-blue-200 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12 '></div>
                  </div>
                </div>
                <div className='flex items-center  gap-3'>
                  <label htmlFor="html$css" className='lg:w-2/12 w-3/12 text-justify font-bold text-[#cb7676]'>Leadership</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-amber-700 to-blue-200 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12 '></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>

        </div>
      </div>

    </>
  )
}

export default About
