import React from "react";

import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <p>Service</p>

      <Link to="/">
        {" "}
        <MDBBtn> Go to Home </MDBBtn>{" "}
      </Link>
    </div>
  );
}
