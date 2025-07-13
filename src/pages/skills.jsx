import React from 'react';
import './skills.css';
export default function Skills() {
  return (
    <>
    <div className='skill-section'>
  <div className='skill'>
    <h2>Skills</h2>
    <h1>Why Hire Me for Your Next <span>Project?</span></h1>
    <p>I’m specialist in UI/UX Design. My passion is designing & solving problems through user experience and research.</p>
    <button>Hire Me</button>
  </div>
  <div className='content2'>
    <div className='first1'>
      <img src='visual design.jpeg' alt='Visual Design' />
      <h4>Visual Design</h4>
      <p>Create user interface design with unique & modern ideas</p>
    </div>
    <div className='first2'>
      <img src='design prototype.jpeg' alt='Design Prototype' />
      <h4>Design Prototype</h4>
      <p>Create advanced design prototypes with Figma</p>
    </div>
    <div className='first3'>
      <img src='ux research.jpeg' alt='UX Research' />
      <h4>UX Research</h4>
      <p>Create digital user products with updated ideas</p>
    </div>
  </div>
</div>

    </>
  );
}
