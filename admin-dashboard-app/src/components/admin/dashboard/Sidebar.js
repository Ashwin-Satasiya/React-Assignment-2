import React from "react";

import { Container, Row, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import profile from "../dashboard/Images/profile.png";

export default function Sidebar() {
  return (
    <div>
      <Row className="sidebar-row p-0 bg-dark">
        <div className="ms-4 mt-3">
          <img
            src={profile}
            style={{ width: "100px", height: "80px" }}
            alt="profile-image"
          ></img>
        </div>

        <h4 className="text-white mt-3">Ajay Dashboard</h4>
        <ul className="p-2 m-3" style={{ listStyleType: "none" }}>
          <li className="">
            <Link
              to="/layout-admin/add-abstract"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Add abstract
            </Link>
          </li>
          <hr className="text-white w-50"></hr>
          <li className="">
            <Link
              to="/layout-admin/skill-categories"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Skill categories
            </Link>
          </li>
          <hr className="text-white w-50"></hr>
          <li className="">
            <Link
              to="/layout-admin/add-portfolio"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Add Portfolio
            </Link>
          </li>
          <hr className="text-white w-50"></hr>
          <li className="">
            <Link
              to="/layout-admin/add-client"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Add clients
            </Link>
          </li>
          <hr className="text-white w-50"></hr>
          <li className="">
            <Link
              to="/layout-admin/manage-contact"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Manage contacts
            </Link>
          </li>
          <hr className="text-white w-50"></hr>
          <li className="">
            <Link
              to="/layout-admin/manage-review"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Manage reviews
            </Link>
          </li>
          <hr className="text-white w-50"></hr>
        </ul>
        <div className="text-center">
          <Button className="logout-btn w-50 mb-3 bg-danger text-white border-0">
            Logout
          </Button>
        </div>
      </Row>
    </div>
  );
}
