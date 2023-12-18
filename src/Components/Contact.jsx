import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

function Contact() {
  const navigate = useNavigate();
  const [terminalLineData, setTerminalLineData] = useState([]);

  const inputhandler = (n) => {
    if (n == 1) {
      location.href = 'mailto:ombeladiya1854@gmail.com'
    }
    else if (n == 2) {
      location.href = 'https://www.linkedin.com/in/om-beladiya-0593331b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
    else if (n == 3) {
      location.href = 'https://www.instagram.com/_beladiya_1854/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'
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
      <Terminal name='Contact Me' prompt='Om:~Home/Contact $' colorMode={ColorMode.Dark} onInput={terminalInput => inputhandler(terminalInput)}>
        <div className='contactme'>
          Ready to Talk 📞?
          <br />
          <br />Click or Input in command line
          <br />
          Enter 'cd..' to go back
          <br /><br />
          <a className='links' href="mailto:ombeladiya1854@gmail.com">1 ~ Email: ombeladiya1854@gmail.com</a>
          <br /><br />
          <a className='links' href="https://www.linkedin.com/in/om-beladiya-0593331b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">2 ~ LinkedIn: linkedincom/in/om-beladiya</a>
          <br /><br />
          <a className='links' href="https://www.instagram.com/_beladiya_1854/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">3 ~ Instagram: instagram.com/_beladiya_1854</a>
          <br />
        </div>
        {terminalLineData}
      </Terminal>
    </div>
  )
}

export default Contact
