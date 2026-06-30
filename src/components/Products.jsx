import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/Products.css'

function Products() {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: 'Classic Black T-Shirt',
      price: 299,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      category: 'Men'
    },
    {
      id: 2,
      name: 'Cozy Beige Hoodie',
      price: 599,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
      category: 'Women'
    },
    {
      id: 3,
      name: 'Premium Blue Jeans',
      price: 799,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      category: 'Unisex'
    },
    {
      id: 4,
      name: 'Leather Jacket',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
      category: 'Men'
    },
    {
      id: 5,
      name: 'Elegant Black Dress',
      price: 899,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
      category: 'Women'
    },
    {
      id: 6,
      name: 'White Sneakers',
      price: 499,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      category: 'Shoes'
    }
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2 className="products-title">Featured Products</h2>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button 
                    className="quick-view-btn"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">{product.price} EGP</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products