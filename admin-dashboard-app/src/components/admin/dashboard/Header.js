import React from "react";

import { Container, Row } from "react-bootstrap";

export default function () {
  return (
    <div>
      <Row>
        <div className="col-md-3 mt-2 ">
          <h3>
            Dashboard <i className="bi bi-grid-3x3-gap"></i>{" "}
          </h3>
        </div>
        <div className=" dashboard-setting col-md-7 mt-2">
          <h4>
            {" "}
            <i className="bi bi-gear"></i> Dashboard Admin Setting
          </h4>
        </div>
        <div className="notification col-md-2 mt-3 ">
          <div>
            <i class="bi bi-bell">
              {" "}
              <sup>
                {" "}
                <span class="badge bg-danger">105</span>{" "}
              </sup>{" "}
            </i>
            <i class="bi bi-briefcase ms-1">
              {" "}
              <sup>
                {" "}
                <span class="badge bg-danger">97</span>{" "}
              </sup>{" "}
            </i>
            <i class="bi bi-person ms-1">
              {" "}
              <sup>
                {" "}
                <span class="badge bg-danger">89</span>{" "}
              </sup>{" "}
            </i>
          </div>
        </div>
      </Row>
    </div>
  );
}
