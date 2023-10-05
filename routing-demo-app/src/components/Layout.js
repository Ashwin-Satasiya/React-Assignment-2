import React from "react";

import { Outlet, Link } from "react-router-dom";

import { Nav } from "react-bootstrap";

import "../css/style.css";

export default function Layout() {
  return (
    <div>
      <Nav className="nav navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/our-products" className="nav-link">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/our-services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </Nav>
      <Outlet />
    </div>
  );
}
