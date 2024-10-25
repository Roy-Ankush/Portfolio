import React, { useState } from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ankush-portfolio-w9wt.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message, clear form)
        console.log('Message sent successfully');
        
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message sent successfully', {
          position: 'top-center',
          autoClose: 2000,
          pauseOnHover: false
        })
      } else {
        // Handle error
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='bg-[#28405b] text-white py-10' id='contact'>
        <div className='mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Contact me
          </h2>
          <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className='flex-1'>
              <h3 className='text-3xl font-bold text-transparent bg-clip-text mb-4 bg-gradient-to-r from-green-400 to-blue-500'>
                Let's Talk
              </h3>
              <p>
              I'm always open to discussing new projects, opportunities, <br></br>
              or just having a friendly chat. Feel free to reach out to me <br />
               through any of the channels below.
              </p>
              <div className='mb-4 mt-4'>
                <FaEnvelope className='inline-block text-green-300 mr-2' />
                <NavLink to=''>ankushkumardevv@gmail.com</NavLink>
              </div>
              <div className='mb-4'>
                <FaPhone className='inline-block text-green-300 mr-2' />
                <NavLink to=''>+91 6203335229</NavLink>
              </div>
              <div className='mb-4'>
                <FaLocationPin className='inline-block text-green-300 mr-2' />
                <NavLink to='https://www.google.com/maps/place/Kundanahalli+Sri+Durga+1%2B+Co-live/@12.966016,77.7172583,17z/data=!4m10!1m2!2m1!1ssri+Durga+1%2B!3m6!1s0x3bae130c3db1f3ff:0x76447d3a8114c082!8m2!3d12.9659753!4d77.7220048!15sCgxzcmkgRHVyZ2EgMStaDiIMc3JpIGR1cmdhIDErkgELYm95c19ob3N0ZWyaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXhNMHRNWjFCQkVBReABAA!16s%2Fg%2F11lch7hrnp?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D'>Sri rama pg for gents, PSR Residency, 93, near United <br />   Meadows, Kundalahalli, Brookefield, Bengaluru, Karnataka 560037</NavLink>
              </div>
            </div>

            <div className='flex-1 w-full border-solid border-2 border-green-200 p-3 rounded'>
              <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className='block mb-2'>Your name</label>
                  <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter your name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block mb-2'>Your email</label>
                  <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter your email'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className='block mb-2'>Message</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400'
                    rows={5}
                    placeholder='Enter your message'
                    required
                  />
                </div>
                <button type='submit' className=' w-28 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
