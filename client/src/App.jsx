import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Skills from './pages/skills/Skills'
import {ToastContainer} from 'react-toastify'

export default function App() {
  return (
    < >
    <BrowserRouter>
    <ToastContainer/>
     <Navbar title="Portfolio" home="Home"/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </BrowserRouter>
    </>
  )
}
