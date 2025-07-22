import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu=()=>setIsOpen(!isOpen);
  return (
    <>
    
   <div className="navbar">
      <div className="navbar-logo">MDesign</div>
       <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <div className={`navbar-content ${isOpen ?'open':''}`}>
       
      <nav className="navbar-links">
        <Link to="/" onClick={()=>setIsOpen(false)}>About</Link>
        <Link to="/skills" onClick={()=>setIsOpen(false)}>Skills</Link>
        <Link to="/portfolio" onClick={()=>setIsOpen(false)}>Portfolio</Link>
         <Link to="/testimonial" onClick={()=>setIsOpen(false)}>Testimonial</Link>
      </nav>
     </div>
      <div className="navbar-button">
       <a href="Sharmila_inkoolu_Resume.pdf" download><button>Download CV</button></a>

      </div>
    
    </div>
    
    </>
  );
}

