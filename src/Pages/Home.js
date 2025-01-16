import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductPage from '../Pages/ProductPage';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

function Home() {
  return (
    <>
    <Carousel data-bs-theme="dark" style={{margin:"10px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/slider1.jpg"
          alt="First slide"
          style={{width:"300px",height:"700px"}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/slider.webp"
          alt="Second slide"
          style={{width:"300px",height:"700px"}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/Earring1/p1.webp"
          alt="Third slide"
          style={{width:"300px",height:"700px"}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <About/>
      <Blog/>
    <ProductPage/>
    <Contact/>
    </div>
    </>
    
  );
  
}


export default Home;