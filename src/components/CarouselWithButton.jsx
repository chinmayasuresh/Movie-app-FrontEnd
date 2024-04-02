import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel, Button } from 'react-bootstrap'; // Import Bootstrap components

const CarouselWithButton = () => {
  return (
    <Carousel>
     
      <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img height="755px" src="https://e1.pxfuel.com/desktop-wallpaper/439/721/desktop-wallpaper-movie-poster-80s-movie-collage.jpg" class="d-block w-100" alt="..."></img>
          
              </div>
              
            </div>
        </div>
    </div>




      <Carousel.Caption>
        <Button variant="primary" size="lg" href="/sign">SIGNIN</Button>
      </Carousel.Caption>
    </Carousel>
  );
};

export default CarouselWithButton;
