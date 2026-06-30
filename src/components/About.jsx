import '../styles/About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <span className="about-label">About Us</span>
            <h2 className="about-title">Your Style, Our Passion</h2>
            <p className="about-description">
              At JOVAN, we believe fashion is more than just clothing—it's a form of self-expression. 
              Since our founding, we've been dedicated to bringing you the latest trends and timeless 
              classics that help you look and feel your best.
            </p>
            <p className="about-description">
              Our carefully curated collection features high-quality pieces for every occasion, 
              from casual everyday wear to statement pieces that turn heads. We're committed to 
              sustainable fashion and ethical practices, ensuring that style never comes at the 
              cost of our planet.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>10K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Products</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Brands</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" 
              alt="Fashion Store" 
            />
          </div>
        </div>
        
        <div className="about-values">
          <h3 className="values-title">Our Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">✨</span>
              <h4>Quality First</h4>
              <p>We source only the finest materials and work with trusted manufacturers.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🌍</span>
              <h4>Sustainability</h4>
              <p>Committed to eco-friendly practices and reducing our environmental impact.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💎</span>
              <h4>Authenticity</h4>
              <p>Every piece is genuine, reflecting our commitment to honest business.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">❤️</span>
              <h4>Customer Love</h4>
              <p>Your satisfaction is our priority. We're here for you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About