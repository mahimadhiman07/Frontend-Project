import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Get in Touch</h2>
      <p className="text-center mb-5">
        Have questions or need assistance? We're here to help! Reach out to us using the form below or through the provided contact details.
      </p>
      
      <div className="row">
        {/* Contact Form Section */}
        <div className="col-md-6 mb-4">
          <h4 className="mb-3">Contact Us</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3 justify-content-center">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="col-md-6 ml-4">
          <h4 className="mb-3">Contact Details</h4>
          <p><strong>Email:</strong> support@earringbrand.com</p>
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Address:</strong> 123 Earring Lane, Jewelry City, CA 98765</p>
          <h5 className="mt-4">Follow Us</h5>
          <div>
            <a href="https://facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://instagram.com" className="me-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
