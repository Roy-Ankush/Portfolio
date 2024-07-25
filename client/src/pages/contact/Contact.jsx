import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
// import port from '../../assets/port0.jpg'
import Footer from '../footer/Footer'
function Contact() {
  return (
    <>
      <div className=' bg-[#28405b] text-white py-10  ' id='contact'>
        <div className='mx-auto px-8 md:px-16 lg:px-24  '>
          <h2 className='text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Contact me</h2>
          <div className='flex flex-col md:flex-row items-center md:space-x-12 '>
            <div className='flex-1'>
              <h3 className=' text-3xl font-bold text-transparent bg-clip-text mb-4 bg-gradient-to-r from-green-400 to-blue-500'>let's Talk</h3>
              <p>kjsgd adfghzdsf ldfbzufd jyfxbaspouir piuyxcb patyexcfavepoi piuewfyacwbeu </p>
              <div className='mb-4 mt-4'>
                <FaEnvelope className='inline-block text-green-300 mr-2'></FaEnvelope>
                <NavLink to=''>abcd@gmail.com</NavLink>
              </div>
              <div className='mb-4'>
                <FaPhone className='inline-block text-green-300 mr-2'></FaPhone>
                <NavLink to=''>abcd@gmail.com</NavLink>
              </div>
              <div className='mb-4'>
                <FaLocationPin className='inline-block text-green-300 mr-2'></FaLocationPin>
                <NavLink to=''>abcd@gmail.com</NavLink>
              </div>
            </div>

            <div className='flex-1 w-full border-solid border-1 border-green-100 p-3 rounded'>
              <form className='space-y-4'>
                <div>
                  <label htmlFor="name" className='block mb-2'>Your name</label>
                  <input type="text" className='w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400' placeholder='enter your name' />
                </div>
                <div>
                  <label htmlFor="email" className='block mb-2'>Your email</label>
                  <input type="email" className='w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400' placeholder='enter your email' />
                </div>
                <div>
                  <label htmlFor="message" className='block mb-2'>message</label>
                  <textarea type="message" className='w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400' rows={5} placeholder='enter your message' />
                </div>
                <button className='bg-gradient-to-r from-green-400  to-blue-400 text-black font-bold  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
