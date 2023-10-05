import React from "react";

import img1 from "../Images/Image1.jpg";
import img2 from "../Images/Image2.jpg";
import img3 from "../Images/Image3.jpg";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function () {
  return (
    <div>
      <MDBCarousel showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={img1}
          alt="..."
        />

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={img2}
          alt="..."
        />

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={img3}
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}
