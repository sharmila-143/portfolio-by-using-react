import React from "react";
import './portfolio.css'
export default function Portfolio(){
  return (
    <>
    <div className="portfolio-section">
      <div className="portfolio" >
        <h1> My Creative Works Latest <span>Projects</span></h1>
        <p> I have selected and mentioned here some of my latest projects to share with you.</p>
        <button>Show More</button>
      </div>
      <div><img src="portfolio.jpeg"/></div>
    </div>
    </>
  );
}