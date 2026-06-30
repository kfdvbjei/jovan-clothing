import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Cart.css'

function Cart({ onClose }) {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const navigate = useNavigate()

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    onClose()
    navigate('/checkout')
  }

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>🛒 Shopping Cart</h2>
          <button className="close-cart" onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty-message">
            <p>Your cart is empty!</p>
            <p>Add some products to get started 🛍️</p>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-sidebar">
                  <img src={item.image} alt={item.name} />
                  
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    {item.size && <p className="item-size">Size: {item.size}</p>}
                    <p className="item-price">{item.price} EGP</p>
                    
                    <div className="item-quantity">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>

                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Subtotal:</span>
                <span>{getCartTotal()} EGP</span>
              </div>
              <div className="cart-shipping">
                <span>Shipping:</span>
                <span>50 EGP</span>
              </div>
              <div className="cart-final-total">
                <span>Total:</span>
                <span>{getCartTotal() + 50} EGP</span>
              </div>
              
              <button className="checkout-button" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart