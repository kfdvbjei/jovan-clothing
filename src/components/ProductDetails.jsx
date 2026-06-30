import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/ProductDetails.css'

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  // المنتجات (نفس البيانات من Products.jsx)
  const products = [
    {
      id: 1,
      name: "Classic Black T-Shirt",
      price: 299,
      category: "Men",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      description: "Premium cotton black t-shirt perfect for any occasion. Comfortable fit with modern design.",
      features: ["100% Cotton", "Machine Washable", "Comfortable Fit", "Durable"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Cozy Beige Hoodie",
      price: 599,
      category: "Women",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      description: "Soft and cozy hoodie perfect for casual wear. Warm and stylish for everyday comfort.",
      features: ["Soft Fabric", "Warm", "Comfortable Hood", "Kangaroo Pocket"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Premium Blue Jeans",
      price: 799,
      category: "Unisex",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      description: "Classic blue jeans with premium denim. Perfect fit and durable construction.",
      features: ["Premium Denim", "Classic Fit", "Durable", "Multiple Pockets"],
      sizes: ["28", "30", "32", "34", "36", "38"]
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: 1299,
      category: "Men",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
      description: "Classic leather jacket with vintage style. Premium quality and timeless design.",
      features: ["Genuine Leather", "Vintage Style", "Multiple Pockets", "Comfortable Fit"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 5,
      name: "Elegant Black Dress",
      price: 899,
      category: "Women",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      description: "Elegant black dress perfect for special occasions. Flattering fit and premium fabric.",
      features: ["Premium Fabric", "Elegant Design", "Comfortable Fit", "Easy Care"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 6,
      name: "White Sneakers",
      price: 499,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      description: "Classic white sneakers with comfortable sole. Perfect for everyday wear.",
      features: ["Comfortable Sole", "Breathable", "Durable", "Classic Design"],
      sizes: ["40", "41", "42", "43", "44", "45"]
    }
  ]

  const product = products.find(p => p.id === parseInt(id))

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size!')
      return
    }
    
    addToCart({
      ...product,
      size: selectedSize,
      quantity: quantity
    })
    
    alert('Added to cart!')
  }

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found!</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Products
        </button>

        <div className="product-details-content">
          <div className="product-details-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-details-info">
            <span className="product-badge">{product.category}</span>
            <h1 className="product-details-title">{product.name}</h1>
            <span className="product-details-price">{product.price} EGP</span>

            <div className="product-tabs">
              <button 
                className={`tab ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`tab ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'description' && (
                <p className="product-description">{product.description}</p>
              )}
              {activeTab === 'features' && (
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="product-options">
              <div className="size-selector">
                <label>Select Size:</label>
                <div className="sizes">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={decreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increaseQuantity}>+</button>
                </div>
              </div>
            </div>

            <button className="add-to-cart-large" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails