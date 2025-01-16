// ProductPage.js
import React, { useState } from 'react';
import ProductCard from '../ProductList/ProductCard';
import products from '../ProductList/ProductData';

function ProductPage() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const handleAddToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
    alert(`${quantity} ${product.name}(s) added to cart!`);
  };

  // Update product quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              product={product}
              addToCart={handleAddToCart}
              updateQuantity={handleUpdateQuantity}
              removeItem={handleRemoveItem}
              addToWishlist={() => alert('Wishlist feature not implemented yet')}
            />
          </div>
        ))}
      </div>

      {/* Render Cart */}
      
    </div>
  );
}

export default ProductPage;
