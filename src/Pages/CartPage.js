import React from "react";
import { useCart } from "./CartContext";

function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalItems, totalPrice } =
    useCart();

  return (
    <div className="container mt-5">
      <h2  style={{textAlign:"center"}}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center border-bottom py-2"
              >
                <div className="col-3"  style={{textAlign:"center"}}>
                <img src={item.image}  alt="img" style={{width:"150px",height:"150px"}}/>
                  <h5>{item.name}</h5>
                 
                </div>
                <div className="col-3" style={{textAlign:"center"}}>
                <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="col-3"  style={{textAlign:"center"}} >
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary mt-4"  style={{textAlign:"center", marginBottom:"40px"}}>
            <h4>Total Items: {totalItems}</h4>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
