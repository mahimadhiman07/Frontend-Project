import React from "react";
import { useCart } from "../Pages/CartContext";

function Cart({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item d-flex justify-content-between align-items-center mb-3">
      <div>
      <img src={item.image} alt="img"/>
        <h5>{item.name}</h5>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="form-control"
          style={{ width: "60px", display: "inline-block", marginRight: "10px" }}
        />
        <button
          className="btn btn-danger"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
      <div>
        <strong>Total: ${item.price * item.quantity}</strong>
      </div>
    </div>
  );
}

export default Cart; 
