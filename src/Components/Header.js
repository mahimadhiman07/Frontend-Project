
import React, { useEffect } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({ isLoggedIn }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#AB886D" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Shop Name Section */}
        <div>
          <h3 style={{fontFamily:"sans-serif", fontStyle:"italic", margin:"20px"}}>Anora </h3>
        </div>

        {/* Navigation Links Section */}
        <div style={{ display: "flex", gap: "15px", textAlign: "center" }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "white" }}
            className="nav-button"
            data-aos="zoom-in"
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{ color: "white" }}
            className="nav-button"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            About
          </Button>
          <Button
            component={Link}
            to="/blog"
            sx={{ color: "white" }}
            className="nav-button"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Blog
          </Button>
          <Button
            component={Link}
            to="/product"
            sx={{ color: "white" }}
            className="nav-button"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Product
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: "white" }}
            className="nav-button"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Contact
          </Button>
          {!isLoggedIn && (
            <Button
              component={Link}
              to="/login"
              sx={{ color: "white" }}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Login
            </Button>
          )}
        </div>
        <div>
          <Button
            component={Link}
            to="/cart"
            sx={{ color: "white", position: "relative" }}
          >
            <ShoppingCartCheckoutTwoToneIcon size={24} />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
