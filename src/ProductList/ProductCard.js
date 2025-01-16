// ProductCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Favorite, AddShoppingCart } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ product, addToCart, addToWishlist }) {
  
  return (
    <Card style={{ maxWidth: 345, margin: '1rem', padding: '1rem' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <Button variant="outlined" onClick={() => addToCart(product)}>
            <AddShoppingCart /> Add to Cart
          </Button>
          <IconButton
            color="secondary"
            onClick={() => addToWishlist(product)}
            aria-label="add to wishlist"
          >
            <Favorite />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
