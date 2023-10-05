import React from "react";

import { Container, Row } from "react-bootstrap";

import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";
import Content from "./dashboard/Content";
import Footer from "./dashboard/Footer";

export default function LayoutAdmin() {
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
            <Content />
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
