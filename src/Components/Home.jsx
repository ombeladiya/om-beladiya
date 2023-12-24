import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import figlet from 'figlet';
import standard from "figlet/importable-fonts/Standard.js";
import big from "figlet/importable-fonts/Train";
import amc3line from "figlet/importable-fonts/Alligator";
import ascii3d from "figlet/importable-fonts/3D-ASCII";
import max4 from "figlet/importable-fonts/4Max";
import varsity from "figlet/importable-fonts/Varsity";

function Home() {
  const navigate = useNavigate();
  const [figletText, setFigletText] = useState('');

  useEffect(() => {
    const fetchRandomFont = async () => {
      try {
        //list of commonly available Figlet fonts
        const availableFonts = [
          standard,
          amc3line,
          big,
          ascii3d,
          max4,
          varsity
        ];

        // Select a random font
        const randomIndex = Math.floor(Math.random() * availableFonts.length);
        const randomFontType = availableFonts[randomIndex];
        figlet.parseFont("Ghost", randomFontType);
        // Generate Figlet text with the random font
        figlet.text(
          'OM',
          {
            font: 'Ghost',
            horizontalLayout: 'fitted',
            verticalLayout: 'default',
            width: 40,
            whitespaceBreak: true,
          },
          (err, data) => {
            if (err) {
              console.error('Error generating Figlet text:', err);
              return;
            }
            setFigletText(data);
          }
        );
      } catch (error) {
        console.error('Error fetching Figlet fonts:', error);
      }
    };
    fetchRandomFont();
  }, []);

  const [terminalLineData, setTerminalLineData] = useState([]);

  const inputhandler = (n) => {
    if (n == 1) {
      navigate('/projects');
    }
    else if (n == 2) {
      navigate('/contact')
    }
    else if (n == 3) {
      navigate('/about')
    } else {
      setTerminalLineData(prevData => {
        return [...prevData, <TerminalOutput>
          <span className='invalid'>Invalid Command!!
           <br className='invalidbr' />
           Enter from [1,2,3]</span>
          </TerminalOutput>];
      })
    }
  }
 
  return (
    <div className="container">
      <Terminal name='Om beladiya' prompt='Om:~Home $' colorMode={ColorMode.Dark} onInput={terminalInput => inputhandler(terminalInput)}>
        <pre >{figletText}</pre>
        <div >
          Hello!👋 Welcome to my portfolio.
          <br />Reflecting My Skills in Terminal Echoes!<br />
          <br />Click or Input in command line
          <br />
          <Link className='links' to='/projects'>1 ~ Projects</Link>
          <br />
          <Link className='links' to='/contact'>2 ~ Contact</Link>
          <br />
          <Link className='links' to='/about'>3 ~ About</Link>
        </div>
        {terminalLineData}
      </Terminal>
    </div>
  );

}

export default Home
