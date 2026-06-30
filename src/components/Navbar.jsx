import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Cart from './Cart'
import '../styles/Navbar.css'

function Navbar() {
  const [showCart, setShowCart] = useState(false)
  const { getCartCount } = useCart()

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h1>JOVAN</h1>
          </Link>
          
          <ul className="navbar-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="navbar-icons">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn">👤</button>
            <button 
              className="icon-btn cart-btn" 
              onClick={() => setShowCart(true)}
            >
              🛒
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  )
}

export default Navbar