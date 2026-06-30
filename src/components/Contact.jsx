import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">Get In Touch</span>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Visit Us</h3>
              <p>123 Fashion Street<br/>Cairo, Egypt</p>
            </div>

            <div className="info-card">
              <span className="info-icon">📧</span>
              <h3>Email Us</h3>
              <p>support@jovan.com<br/>info@jovan.com</p>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <h3>Call Us</h3>
              <p>+20 123 456 7890<br/>Mon-Fri: 9AM - 6PM</p>
            </div>

            <div className="info-card">
              <span className="info-icon">💬</span>
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <p className="success-message">
                Thank you! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact