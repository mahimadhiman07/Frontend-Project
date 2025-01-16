import React from 'react';
import CustomerReview from '../Components/CustomerReview';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        {/* Brand Story Section */}
        <div className="col-md-6">
          <h3>Our Story</h3>
          <p>
            At <strong>Anora </strong>, we believe that earrings are more than just accessories—they’re an expression of individuality. Inspired by the beauty of nature and the elegance of simplicity, we craft each pair with care, ensuring they not only look stunning but feel comfortable too.
          </p>
          <p>
            Founded in <strong>2024</strong>, our mission has been to bring elegant, timeless designs to women everywhere. What started as a passion project has grown into a trusted brand, known for its quality, craftsmanship, and attention to detail.
          </p>
        </div>

        {/* Quality and Craftsmanship Section */}
        <div className="col-md-6">
          <h3>Quality & Craftsmanship</h3>
          <p>
            Each pair of earrings is handcrafted using ethically sourced materials. From durable sterling silver to luxurious gemstones, we ensure the highest quality in every piece. Our skilled artisans put love and care into every design, making sure you receive nothing but the best.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        {/* Design Philosophy Section */}
        <div className="col-md-6">
          <h3>Our Design Philosophy</h3>
          <p>
            We focus on blending timeless elegance with modern flair, offering earrings that can be worn every day or for a special occasion. Whether it's classic studs or statement pieces, our designs are meant to reflect your unique style.
          </p>
        </div>

        {/* Customer Focus Section */}
        <div className="col-md-6">
          <h3>Why Choose Us?</h3>
          <p>
            At <strong>Anora </strong>, we prioritize our customers' needs. We offer personalized designs, exceptional customer service, and free shipping on all orders. We are committed to sustainability and eco-friendly packaging, ensuring that your experience with us is both beautiful and environmentally conscious.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="row mt-5 mb-4 text-center">
        <div className="col">
          <h4>Discover your perfect pair of earrings today!</h4>
          <button 
            className="btn btn-primary mt-3" 
            onClick={() => navigate('/product')}
          >
            Browse Our Collection
          </button>
        </div>
      </div>
    <CustomerReview/>
  </div>
  
   
  );
};

export default About;
