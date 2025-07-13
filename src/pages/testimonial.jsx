import React from 'react';
import'./testimonial.css';
export default function Testimonial() {
  return (
    <>
    <div className='testimonials-section'>
        <h4>Testimonials</h4>
        <h3>Our Customer Say Something <span>About Us</span></h3>
        <div className='testimonials'>
           <div className='review1'>
           <p  className='para'>★★★★★</p>
           <p > We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company</p>
          <img src='review1.jpeg'/>
          </div>
          <div>
            <p  className='para'>★★★★★</p>
           <p > We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company</p>
          <img src='review2.jpeg'/>
          </div>
          <div>
            <p  className='para'>★★★★★</p>
           <p> We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company</p>
          <img src='review3.jpeg'/>
          </div>
        </div>
    </div>
    </>
  );
    
    
}
