import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>📧 Email: info@jovan.com</p>
            <p>📱 Phone: +20 123 456 7890</p>
            <p>📍 Address: Cairo, Egypt</p>
          </div>
          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact