import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from "./pages/ProductDetails";
import { useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Header cartItems = {cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>} />
      </Routes>

      <Footer />
    </Router>
  );
}
      
        
export default App;
