import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/Checkout.css'

function Checkout() {
  const navigate = useNavigate()
  const { cart, getCartTotal } = useCart()

  const [formData, setFormData] = useState({
    // Shipping Info
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    
    // Payment Info
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Shipping validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required'

    // Payment validation
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required'
    else if (formData.cardNumber.replace(/\s/g, '').length !== 16) newErrors.cardNumber = 'Card number must be 16 digits'
    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required'
    if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required'
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required'
    else if (formData.cvv.length !== 3) newErrors.cvv = 'CVV must be 3 digits'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert('Your cart is empty!')
      navigate('/')
      return
    }

    if (validateForm()) {
      // هنا ممكن تضيف API call للسيرفر
      alert('🎉 Order placed successfully! Thank you for your purchase!')
      navigate('/')
    }
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <div className="checkout-empty-content">
          <h2>🛒 Your Cart is Empty</h2>
          <p>Add some products before checkout!</p>
          <button onClick={() => navigate('/')}>Go Shopping</button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Shop
        </button>

        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Shipping Information */}
            <div className="form-section">
              <h2>📦 Shipping Information</h2>
              
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01234567890"
                  />
                  {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main Street"
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Cairo"
                  />
                  {errors.city && <span className="error">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label>Postal Code *</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="12345"
                  />
                  {errors.postalCode && <span className="error">{errors.postalCode}</span>}
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="form-section">
              <h2>💳 Payment Information</h2>

              <div className="form-group">
                <label>Card Number *</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              </div>

              <div className="form-group">
                <label>Cardholder Name *</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  placeholder="JOHN DOE"
                />
                {errors.cardName && <span className="error">{errors.cardName}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date *</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                  {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                </div>

                <div className="form-group">
                  <label>CVV *</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="3"
                  />
                  {errors.cvv && <span className="error">{errors.cvv}</span>}
                </div>
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="order-summary">
            <h2>📋 Order Summary</h2>

            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="summary-item-info">
                    <h4>{item.name}</h4>
                    {item.size && <p>Size: {item.size}</p>}
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <span className="summary-item-price">
                    {item.price * item.quantity} EGP
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{getCartTotal()} EGP</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>50 EGP</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>{getCartTotal() + 50} EGP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout