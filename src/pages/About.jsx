import './About.css'
import { Link } from 'react-router-dom';
export default function About() {
  return(
    <>
    <section>
    <div className="section1">
      <div className="content1">
        <h4>Welcome</h4>
        <h1>I have<span> Creative Design</span> Experience</h1>
        <p>I'm Sharmila, a creative Product Designer.I've been helping business to solve their problems with my design for 2 years.</p>
        <div><Link to="/contact"><button>Contact Me</button> </Link><button onClick={() => window.location.href = 'https://sharmila-143.github.io/Porfolio/'}>
  Portfolio
</button>
</div>
      </div>
      <div className="profile"><img src="profile1.png"/></div>
      <div className="follow-section"> <p>Follow me on:_________</p>
      <img src="github.webp"/>
      <img src="linkdin.webp"/>
        </div>
    </div>
  </section>  
  <section>
    <div className='section2'>
      <div className='part1'>
         <h1>80+</h1>
         <p>satistfied clients</p>
      </div>
       <div className='part2'>
         <h1>200+</h1>
         <p>Projects completed</p>
      </div>
       <div className='part3'>
         <h1>99+</h1>
         <p>Reviews given</p>
      </div>
      
    </div>
  </section>

  </>
  );
}
