import React from "react";

import { Container, Row } from "react-bootstrap";

export default function FooterAdmin() {
  return (
    <div>
      <Container fluid className="FooterContainer bg-light">
        <Row className="">
          <div className="col-md-4">
            <div className="text-center">
              <span className="bi bi-facebook fs-1 text-secondary"></span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <span className="bi bi-twitter fs-1 text-primary "></span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <span className="bi bi-linkedin fs-1 text-secondary"></span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
