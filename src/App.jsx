import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import ProductDetails from './components/ProductDetails'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import './styles/animations.css'

// صفحة Home منفصلة
function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App