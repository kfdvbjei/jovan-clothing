import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>JOVAN</h3>
          <p>Premium Fashion Store</p>
          <p>Quality clothing for everyone</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">💼</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 JOVAN Clothing. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer