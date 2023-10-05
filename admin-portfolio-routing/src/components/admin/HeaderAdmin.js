import React from "react";

import { Container, Row, Badge } from "react-bootstrap";

export default function HeaderAdmin() {
  return (
    <div>
      <Container fluid className="fixed-top">
        <Row className="bg-secondary p-3 ">
          <div className="col-md-3 mt-2">
            <div className="">
              <h3 className="text-white">
                Dashboard <span className="bi bi-grid-3x3"></span>
              </h3>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <Row>
              <p className=" col-lg-4 col-md-4 text-white">
                <span className="bi bi-menu-down me-1"></span> Menu
              </p>
              <p className="col-lg-4 col-md-4 text-white">
                <span class="bi bi-card-checklist me-1 "></span>Projects
              </p>
              <p className="col-lg-4 col-md-4 text-white">
                <span className="bi bi-gear me-1 "></span>Setting
              </p>
            </Row>
          </div>
          <div className="col-md-2 text-white mt-1">
            <Row className="justify-content-evenly m-0">
              <div className="col-md-3 col-sm-2 me-2 ">
                <button type="button" className="btn btn-info px-3 ">
                  <span class="bi bi-brightness-high"></span>
                </button>
              </div>
              <div className="col-md-3 col-sm-2 me-2">
                <button type="button" className="btn btn-success px-3">
                  <span class="bi bi-moon"></span>
                </button>
              </div>
            </Row>
          </div>
          <div className="col-md-3 text-white mt-2">
            <Row className=" justify-content-end ">
              <div className="col-md-3 ">
                <span className="bi bi-bell fs-5">
                  <sup className="m-0">
                    <Badge bg="danger">3</Badge>
                  </sup>
                </span>{" "}
              </div>
              <div className="col-md-3">
                <span className="bi bi-chat fs-5">
                  <sup className="m-0">
                    <Badge bg="warning">9</Badge>
                  </sup>
                </span>
              </div>
              <div className="col-md-3 ">
                <span className="bi bi-person fs-5">
                  <sup className="m-0">
                    <Badge bg="success">2</Badge>
                  </sup>
                </span>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}
