import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div>
      <MDBContainer fluid className="bg-primary p-2">
        <MDBRow>
          <MDBCol>
            <p className="text-center text-white mt-2 fs-4">
              &#169; 2023 Copyright, All rights reserved.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
