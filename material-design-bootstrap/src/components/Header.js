import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
export default function Header() {
  return (
    <div>
      <MDBNavbar bgColor="primary">
        <MDBContainer fluid>
          <MDBRow md="auto">
            <MDBCol className="">
              <MDBNavbarBrand className="text-white mt-2 fs-3">
                MD Bootstrap
              </MDBNavbarBrand>
            </MDBCol>
            {/* Navigation */}
            <MDBCol md="auto" className="">
              <ul className="navbar-nav d-flex flex-row mt-2">
                <li className="nav-item ">
                  <Link to="/" className="nav-link fs-4 text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link to="/about" className="nav-link fs-4 text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link to="/service" className="nav-link fs-4 text-white">
                    Service
                  </Link>
                </li>
                <Link className="nav-item ms-3">
                  <Link to="/contact" className="nav-link fs-4 text-white">
                    Contact us
                  </Link>
                </Link>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBNavbar>
      <Outlet />
    </div>
  );
}
