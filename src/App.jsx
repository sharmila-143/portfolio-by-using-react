import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './pages/navbar';
import About from './pages/About';
import Portfolio from './pages/portfolio';
import Testimonial from './pages/testimonial';
import Skills from './pages/skills';
import Contact from './pages/contact';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>


       <Navbar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </>
  )
}

export default App;
