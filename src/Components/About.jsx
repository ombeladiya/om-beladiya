import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

function About() {
  const navigate=useNavigate();
  const [terminalLineData, setTerminalLineData] = useState([
      <TerminalOutput>
     </TerminalOutput>
    ]);

    
const inputhandler=(n)=>{
  if(n==1){
    location.href='https://landmen11.up.railway.app'
  } 
  else if (n == 'Cd..') {
    navigate('/')
  }
 else{
  setTerminalLineData(prevData => [...prevData, <TerminalOutput ><span className='invalid'>Invalid Command!!</span></TerminalOutput>])
 }
  }
  return (
    <div>
      <div className="container">
          <Terminal name='About me' prompt='Om:~Home/About $' colorMode={ ColorMode.Dark }  onInput={ terminalInput => inputhandler(terminalInput) }>
          <div className='aboutme'>
          A Chronicle of Life, Passion, and Purpose 🌟
       <br/><br/>
         <span>        g    g</span>   Welcome to my digital space!, a dedicated individual with a strong work ethic and an unwavering passion for learning. Whether I'm immersed in projects, solving problems, or embracing challenges, I approach each endeavor with enthusiasm and determination. Off the digital grid, you'll find me on the kabaddi and cricket fields, finding inspiration in the teamwork and strategy these sports demand. I thrive on transforming ideas into tangible projects, relishing the problem-solving process. Life's challenges are opportunities for growth, and I eagerly embrace them. Join me on this journey of continuous learning, creativity, and conquering challenges.
       </div>
       <div>
       <br/>
    <br/>Click or Input in command line
    <br/>
            Enter 'Cd..' to go back
    <br/><br/>
     <Link className='links' to='/'>1 ~ Resume</Link>
       </div>
          { terminalLineData }
          </Terminal>
      </div>
    </div>
  )
}

export default About
