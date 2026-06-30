import React from 'react'
import Products from '../components/Products'
import '../styles/Shop.css'

function Shop() {
  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop All Products</h1>
        <p>Browse our complete collection</p>
      </div>
      <Products />
    </div>
  )
}

export default Shop