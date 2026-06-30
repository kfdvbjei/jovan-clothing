import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About JOVAN</h1>
        <p>Welcome to JOVAN - Your Premium Fashion Destination</p>
        
        <div className="about-content">
          <section>
            <h2>Our Story</h2>
            <p>Founded in 2026, JOVAN has been dedicated to bringing you the finest quality clothing and accessories. We believe that fashion is more than just clothes - it's a way to express yourself.</p>
          </section>
          
          <section>
            <h2>Our Mission</h2>
            <p>To provide high-quality, stylish clothing that makes everyone feel confident and comfortable. We're committed to sustainability and ethical fashion practices.</p>
          </section>
          
          <section>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>✅ Premium Quality Materials</li>
              <li>✅ Affordable Prices</li>
              <li>✅ Fast Shipping</li>
              <li>✅ Excellent Customer Service</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About