import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
export default function ContactApp() {
  return (
    <div>
      <p>Contact</p>
      <Link to="/">
        <MDBBtn>Go to Home</MDBBtn>
      </Link>
    </div>
  );
}
