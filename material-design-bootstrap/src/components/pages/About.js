import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <p>About</p>
      <Link to="/">
        <MDBBtn> Go to Home </MDBBtn>
      </Link>
    </div>
  );
}
