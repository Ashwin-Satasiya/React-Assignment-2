import React from "react";

import { ButtonToolbar, Container, Row } from "react-bootstrap";

export default function LoginAdmin() {
  return (
    <Container fluid className=" mt-3">
      <Row className="justify-content-center text-center">
        <div className="col-md-4 p-4 border bg-success rounded-4">
          <h1 className="text-white">Admin Login</h1>
          <div className="mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email ID *"
            ></input>
            <br></br>
            <br></br>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password *"
            ></input>
          </div>

          <div className="text-start mt-3">
            <b className="fs-4 text-white">
              by click the terms & conditions
              <input
                className="ms-2"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
            </b>
          </div>

          <div className="mt-4">
            <button className="btn btn-danger text-white w-25 ">Login</button>
          </div>

          <h5 className="text-white mt-4">-------- Or --------</h5>

          <div className="mt-4 mb-3 social">
            <button className="btn btn-light w-25" type="button">
              <i className="bi bi-google text-danger"></i>
            </button>
            <button className=" ms-3 btn btn-light w-25" type="button">
              <i className="bi bi-facebook text-primary"></i>
            </button>
          </div>
        </div>
      </Row>
    </Container>
  );
}
