import './App.css'
import Home from './Components/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Components/Projects.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/projects' element={<Projects/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
