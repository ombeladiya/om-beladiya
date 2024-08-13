import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

function Projects() {
  const navigate = useNavigate();
  const [terminalLineData, setTerminalLineData] = useState([]);

  const inputhandler = (n) => {
    if (n == 1) {
      location.href = 'https://landmen.onrender.com'
    }
    else if (n == 2) {
      location.href = 'https://homepricepredicter.onrender.com'
    }
    else if (n == 3) {
      location.href = 'https://expressjunction.onrender.com'
    }
    else if (n == 4) {
      location.href = 'https://www.npmjs.com/package/pincode-to-address'
    }
    else if (n == 5) {
      location.href = 'https://niyarbuy.netlify.app'
    }
    else if (n.toLowerCase() == 'cd..') {
      navigate('/')
    }
    else {
      setTerminalLineData(prevData => [...prevData, <TerminalOutput ><span className='invalid'>Invalid Command!!</span></TerminalOutput>])
    }
  }

  return (

    <div className="container ">
      <Terminal name='Projects' prompt='Om:~Home/Project $' colorMode={ColorMode.Dark} onInput={terminalInput => inputhandler(terminalInput)}>
        <div>
          A Compilation of My Work 📂
          <br /><br />
          Click or Input in command line
          <br />
          Enter 'cd..' to go back
          <br /><br />
          <Link className='links' to='https://landmen.onrender.com'>1 ~ landmen [An ecommerce MERN Stack Website]</Link><br />
          <Link className='links' to='https://homepricepredicter.onrender.com'>2 ~ Home Price Predictor </Link><br />
          <Link className='links' to='https://expressjunction.onrender.com'>3 ~ Express Junction [Courier Aggregator System]</Link><br />
          <Link className='links' to='https://www.npmjs.com/package/pincode-to-address'>4 ~ Pincode-to-address [an npm package]</Link><br />
          <Link className='links' to='https://niyarbuy.netlify.app'>5 ~ Niyarbuy [Quick Commerce frontend Website]</Link><br />
        </div>
        {terminalLineData}
      </Terminal>
    </div>

  )
}

export default Projects
