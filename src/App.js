import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "@mantine/carousel/styles.css";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import ProductPage from "./Pages/ProductPage";
import { CartProvider } from "./Pages/CartContext";
import CartPage from "./Pages/CartPage";
import ProductDetails from "./ProductList/ProductDetails";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [itemCount, setItemCount] = useState(0);

  // Function to add items to the cart
  const addToCart = (quantity) => {
    setItemCount((prevCount) => prevCount + quantity);
  };

  // Function to handle login
  const handleLogin = (credentials) => {
    const { username, password } = credentials;
    if (username === "123" && password === "123") {
      setIsLoggedIn(true); // Set login status to true
    } else {
      alert("Invalid credentials! Please use Username: 123 and Password: 123.");
    }
  };

  return (
    <>
      {/* Pass itemCount to Header */}
      <Header isLoggedIn={isLoggedIn} itemCount={itemCount} />

      <CartProvider>
        {isLoggedIn ? (
          <>
            {/* Show website content after login */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<ProductPage addToCart={addToCart} />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            <Footer />
          </>
        ) : (
          // Show login page before login
          <LoginPage onLogin={handleLogin} />
        )}
      </CartProvider>
    </>
  );
};

export default App;
