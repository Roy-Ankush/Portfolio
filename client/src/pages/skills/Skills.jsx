import React from 'react';
import Card from '../../components/cards/Card';
import Cards from '../../components/cards/Cards';

import bs from '../../assets/bs.webp';
import js from '../../assets/js.webp';
import tw from '../../assets/tailwind.avif';
import html from '../../assets/hm.webp';
import css from '../../assets/cs1.webp';
import java from '../../assets/jav.png';
import c from '../../assets/c.png';
import node from '../../assets/node.png';
import mongo from '../../assets/mon.png';
import reactjs from '../../assets/react.png';
import python from '../../assets/pyt.png';
import jquery from '../../assets/jqe.png';
import sql from '../../assets/sq.png';
import django from '../../assets/dj.png';
import vscode from '../../assets/vscode.png';
import eclipse from '../../assets/eclipse.png';
import pyc from '../../assets/pyc.png';
import jptr from '../../assets/jptr.png';
import rplit from '../../assets/rplit.png';
import pm from '../../assets/pm.png';
import git from '../../assets/git.png';
import todo from '../../assets/todo.png';
import weathe from '../../assets/weathe.png';
import movie from '../../assets/cinema.png';
import place from '../../assets/place.png';


function Skills() {
  return (
    <>
      <div className="bg-cover bg-center text-center  text-white py-10 bg-[#28405b] " id="skills">
        <div className=" mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="p-1 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Professional Skillset
          </h2>
          <div className=" grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-1">
          
          <Cards image={c} name="c"/>
          <Cards image={java} name="Java"/>
          <Cards image={python} name="Python"/>
          <Cards image={html} name="HTML"/>
          <Cards image={css} name="CSS"/>
          <Cards image={bs} name="Bootstrap"/>
          <Cards image={js} name="JavaScript"/>
          <Cards image={jquery} name="jQuery"/>
          <Cards image={node} name="Nodejs"/>
          <Cards image={reactjs} name="Reactjs"/>
          <Cards image={tw} name="Tailwind"/>
          <Cards image={mongo} name="MongoDB"/>
          <Cards image={sql} name="SQL"/>
          <Cards image={django} name="Django"/>
          
          </div>

          <h2 className="p-1 text-4xl font-bold text-center mt-24 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
            Tools I use
          </h2>
          <div className="  grid mb-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-1">        
          <Cards image={vscode} name="VS Code"/>
          <Cards image={eclipse} name="Eclipse"/>
          <Cards image={pyc} name="PyCharm"/>
          <Cards image={jptr} name="Jupyter"/>
          <Cards image={pm} name="Postman"/>
          <Cards image={rplit} name="Replit"/>
          <Cards image={git} name="Git"/>
          </div>


          <h2 className="p-1 text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Projects
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 sm:gap-x-0 gap-y-1">

            <Card title="Todo List" image={todo} details="A to-do list app built with HTML, CSS, and JavaScript. Users can add, edit and delete tasks. Demonstrates my DOM manipulation and jQuery skills"  link="https://github.com/Roy-Ankush/Todo_List"/>

            <Card title="Weather App" image={weathe} details="I built a weather application using HTML, CSS, and JavaScript, app fetches real-time weather data and displays it dynamically. Demonstrating my API handling and asynchronous JavaScript skills" link="https://github.com/Roy-Ankush/Weather_App" />

            <Card title="Movie Ticket-Booking" image={movie} details="I learned to implement full-stack development by integrating API calls, connecting the frontend and backend, and managing data flow between React, Node.js, Express, and MongoDB effectively." link="https://github.com/Roy-Ankush/Movie_Ticket" />

            <Card title="Placement Management" image={place} details="I implementing role-based authentication and authorization, parsing PDFs for to fetch student marks and display detailed information regarding their placements." link="https://github.com/Roy-Ankush/CMRIT_PLACEMENT_MANAGEMENT_SYSTEM" />
            
          </div>



        </div>
      </div>
    </>
  );
}

export default Skills;
