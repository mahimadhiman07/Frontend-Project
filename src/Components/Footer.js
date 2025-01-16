import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Pinterest } from '@mui/icons-material';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#AB886D', color: 'white', padding: '40px 0' }}>
      <Container>
        <Row>
          {/* Column 1 - About Us */}
          <Col xs={12} md={3}>
            <h6>About Us</h6>
            <p>
              We offer the finest selection of earrings, designed to make you shine. Discover our premium collections and find your perfect pair.
            </p>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col xs={12} md={3}>
            <h6>Quick Links</h6>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/shop" style={{ color: '#fff', textDecoration: 'none' }}>Shop</a></li>
              <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
              <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>

          {/* Column 3 - Follow Us */}
          <Col xs={12} md={3}>
            <h6>Follow Us</h6>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                <Facebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                <Instagram />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                <Twitter />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <Pinterest />
              </a>
            </div>
          </Col>

          {/* Column 4 - Contact Us */}
          <Col xs={12} md={3}>
            <h6>Contact Us</h6>
            <p>
              Email: <a href="mailto:info@earrings.com" style={{ color: '#fff', textDecoration: 'none' }}>info@earrings.com</a>
            </p>
            <p>Phone: +123-456-7890</p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ marginBottom: 0 }}>
            &copy; {new Date().getFullYear()} Earring Brand. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
