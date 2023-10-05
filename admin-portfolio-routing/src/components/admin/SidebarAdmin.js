import React from "react";

import { Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <div>
      <div className="sideContainer">
        <ul>
          <li>Mahesh Dashboard</li>
          <hr className="border mt-2 w-75 mt-2 border-warning" />
          <Link className="anchor" to="/login-admin/manage-customer">
            {" "}
            Manage Customer
          </Link>
          <hr className="border mt-2 w-75 border-warning" />
          <li>Add Portfolio</li>
          <hr className="border mt-2 w-75 border-warning" />
          <li>Add Category</li>
          <hr className="border mt-2 w-75 border-warning" />
          <li>Add Skills</li>
          <hr className="border mt-2 w-75 border-warning" />
          <li>Manage Contacts</li>
          <hr className="border mt-2 w-75 border-warning" />
          <li>Manage Reviews</li>
          <hr className="border mt-2 w-75 border-warning" />
          <li>Logout ?</li>
          <hr className="border mt-2 w-75 border-warning" />
        </ul>
      </div>
    </div>
  );
}
