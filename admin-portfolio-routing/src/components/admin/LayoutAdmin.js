import React from "react";

import { Link, Outlet } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";
import ContentAdmin from "./ContentAdmin";
import FooterAdmin from "./FooterAdmin";

export default function LayoutAdmin() {
  return (
    <div>
      <HeaderAdmin />

      <Container fluid className="SideDash">
        <Row className="mt-2">
          {/* Sidebar start */}
          <div className="col-sm-3">
            <SidebarAdmin />
          </div>
          {/* Sidebar end */}
          <div className="col-sm-8">
            <ContentAdmin />
          </div>
        </Row>
      </Container>

      {/* <FooterAdmin />  */}

      <FooterAdmin />
    </div>
  );
}
