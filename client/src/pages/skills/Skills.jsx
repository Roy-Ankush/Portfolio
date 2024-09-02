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


function Skills() {
  return (
    <>
      <div className="bg-cover bg-center text-center  text-white py-10 bg-[#28405b] " id="skills">
        <div className=" mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="p-1 text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-orange-950">
            Professional Skillset
          </h2>
          <div className=" grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-1">
          
          <Cards image={c}/>
          <Cards image={java}/>
          <Cards image={python}/>
          <Cards image={html}/>
          <Cards image={css}/>
          <Cards image={bs}/>
          <Cards image={js}/>
          <Cards image={jquery}/>
          <Cards image={node}/>
          <Cards image={reactjs}/>
          <Cards image={tw}/>
          <Cards image={mongo}/>
          <Cards image={sql}/>
          <Cards image={django}/>
          
          </div>

          <h2 className="p-1 text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Tools I use
          </h2>
          <div className="  grid mb-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-1">        
          <Cards image={vscode}/>
          <Cards image={eclipse}/>
          <Cards image={pyc}/>
          <Cards image={jptr}/>
          <Cards image={pm}/>
          <Cards image={rplit}/>
          <Cards image={git}/>
          </div>


          <h2 className="p-1 text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Projects
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 sm:gap-x-0 gap-y-1">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>



        </div>
      </div>
    </>
  );
}

export default Skills;
