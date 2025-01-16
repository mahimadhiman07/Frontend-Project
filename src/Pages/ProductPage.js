


import React from "react";
import { useCart } from "./CartContext";
import products from "../ProductList/ProductData";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
function ProductPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h2 style={{fontFamily:"cursive", fontStyle:"italic", textAlign:"center",marginBottom:"20px"}}>"Shine Bright with Every Earring."</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id} data-aos="zoom-in" style={{boxShadow:"40px"}}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                padding: "10px",
                margin: "10px 0 30px 10px",
                '&:hover img': {
                  transform: "scale(1.1)", // Zoom in
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <img
                src={product.image}
                alt="img"
                style={{
                  width: "100%",
                  transition: "transform 0.3s ease-in-out", // Smooth transition for zoom
                }}
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h5 style={{margin:"25px 10px 10px 10px", textAlign:"center"}}>{product.name} </h5>
              <p style={{margin:"10px", textAlign:"center"}}>Price: ${product.price}</p>
              <button 
                className="addtocart"
                onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
