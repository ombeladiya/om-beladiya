import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

function Projects() {
  const navigate=useNavigate();
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>
       </TerminalOutput>
      ]);

      
  const inputhandler=(n)=>{
    if(n==1){
      location.href='https://landmen11.up.railway.app'
    } 
    else if(n=='cd..') {
      navigate('/')
    }
   else{
    setTerminalLineData(prevData => [...prevData, <TerminalOutput ><span className='invalid'>Invalid Command!!</span></TerminalOutput>])
   }
    }

  return (
   
      <div className="container ">
          <Terminal name='Projects' prompt='Om:~Home/Project $' colorMode={ ColorMode.Dark }  onInput={ terminalInput  =>  inputhandler(terminalInput) }>
            <div>
            Here is, some of my projects 📂
         <br/>
      <br/>Click or Input in command line
      <br/>
        Enter 'cd..' to go back
      <br/><br/>
       <Link className='links' to='https://landmen11.up.railway.app'>1 ~ Name: landmen [An ecommerce MERN Stack Website]</Link><br/>
            </div>
        { terminalLineData }
      </Terminal>
    </div>
 
  )
}

export default Projects
