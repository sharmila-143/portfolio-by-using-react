import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form action="https://formsubmit.co/sharmilainkoolu@gmail.com" method="POST">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>

        <label htmlFor="messageBox">Message:</label>
        <textarea
          id="messageBox"
          name="message"
          placeholder="Your message"
          rows="4"
        ></textarea>

        <div className="radio-group">
          <label>
            <input type="radio" name="gender" value="female" required /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="other" /> Other
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
