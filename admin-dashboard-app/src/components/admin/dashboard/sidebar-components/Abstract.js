import React from "react";

import { Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

export default function () {
  return (
    <div>
      <Container fluid className="p-0 bg-primary text-white">
        <Row>
          <Header />
        </Row>
      </Container>

      <Container fluid className="p-0 m-0">
        <Row>
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <p>Abstract data</p>
            <Link to="/layout-admin">
              {" "}
              <button className="btn btn-danger">Go to Dashboard Home</button>
            </Link>
          </div>
        </Row>
      </Container>

      <Container fluid className="p-0 bg-dark ">
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}
