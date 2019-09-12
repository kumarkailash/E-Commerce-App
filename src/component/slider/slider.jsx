import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import img1 from "./../../images/Banner-5.png"
import img2 from "./../../images/cart2.png"
import img3 from "./../../images/cart3.png"

const CarouselPage = () => {
  return (
    // <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img  style={{height:"350px" }}
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img style={{height:"350px"}}
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img  style={{height:"350px" }}
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    // </MDBContainer>
  );
}

export default CarouselPage;