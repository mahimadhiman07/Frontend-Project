import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Pages/CartContext";
import products from "../ProductList/ProductData";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
function ProductDetails() {
  const { updateQuantity, addToCart, cart } = useCart(); // Get functions and cart from context
  const { id } = useParams();

  // Find the product by ID
  const product = products.find((item) => item.id === parseInt(id));

  // Initialize useState with a default or fallback value
  const [mainImage, setMainImage] = useState(product?.image || ""); // Use optional chaining

  // Handle the case where the product is not found
  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Get the current quantity of the product in the cart
  const currentCartItem = cart.find((item) => item.id === product.id);
  const currentQuantity = currentCartItem ? currentCartItem.quantity : 0;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Images Section */}
        <div className="col-md-6">
          <img
            src={mainImage}
            alt={product.name}
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <div className="d-flex"  style={{marginBottom:"60px"}}>
            {/* Display additional images if available */}
            {product.additionalImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`additional-${index}`}
                style={{
                  width: "80px",
                  height: "80px",
                  marginRight: "10px",
                  cursor: "pointer",
                  border: mainImage === img ? "2px solid blue" : "none", // Highlight selected image
                }}
                onClick={() => setMainImage(img)} // Update the main image on click
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6"  >
          <h3 style={{fontFamily:"sans-serif",textDecorationLine:"underline",color:"#493628",padding:"10px 10px 10px 30px"}}>{product.name}</h3>
          <p style={{padding:"10px 10px 10px 30px", fontFamily:"serif", fontSize:"25px"}}>{product.description}</p>
          <h4 style={{padding:"10px 10px 10px 30px", fontFamily:"serif"}}>Price: ${product.price}</h4>

          {/* Quantity Controls */}
          <div className="mt-3 d-flex align-items-center" style={{padding:"10px 10px 10px 30px"}}>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() =>
                updateQuantity(product.id, Math.max(currentQuantity - 1, 0))
              }
              disabled={currentQuantity === 0}
            >
              -
            </button>
            <span className="mx-3">{currentQuantity}</span>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => updateQuantity(product.id, currentQuantity + 1)}
            >
              +
            </button>
          </div>
          <div style={{border:"1px solid #493628", objectFit:"cover",borderRadius:"20px",paddingLeft:"20px",marginRight:"320px", marginLeft:"30px",marginTop:"40px"}}>
            <p ><StarRoundedIcon style={{color:" #493628"}}/>Free Shipping on ₹499</p>
            <p><StarRoundedIcon style={{color:" #493628"}}/>Free Mystery Gift on ₹699</p>
            <p><StarRoundedIcon style={{color:" #493628"}}/>Free Jewellery Organiser on ₹1299</p>
          </div>

          {/* Add to Cart Button */}
          <button style={{ backgroundColor:" #493628", color:"white", margin:"20px 20px 20px 35px ", padding:" 10px 100px 10px 100px"}}
            className="btn-btn "
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
