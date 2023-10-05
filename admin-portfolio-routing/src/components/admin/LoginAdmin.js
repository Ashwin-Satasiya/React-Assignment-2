import React from "react";

import { Container, Row } from "react-bootstrap";

import loginImg from "../admin/Images/Login.png";

export default function LoginAdmin() {
  return (
    <div>
      <Container className=" mt-5">
        <div className="row">
          <div className="col-md-5 p-0 ">
            <img
              src={loginImg}
              alt="img"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-7  pt-3">
            <h3 className="mt-2 text-primary text-center">Admin Login...</h3>

            <div className=" p-3 ">
              <input
                className="form-control mt-4"
                type="text"
                placeholder="Enter Mobile number *"
              />
              <br></br>
              <br></br>
              <input
                className=" form-control mt-3"
                type="text"
                placeholder="Enter Password *"
              />

              <div className="row mt-4 justify-content-center">
                <div className="col-md-3">
                  <a class="forgot" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="col-md-3 ">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>

            {/* Line */}

            <div class="line-with-text">
              <div class="line"></div>
              <div class="text">Or</div>
              <div class="line"></div>
            </div>

            {/* Login with Facebbook */}

            <div className="d-flex mt-4  justify-content-center">
              <div className="text-center">
                <span className="fs-1 bi bi-facebook "></span>
              </div>
              <div className="text-center mt-2 ms-3">
                <button className="btn btn-danger">Login with Facebook</button>
              </div>
            </div>

            {/* New account create */}

            <div className="mt-4 mb-4 text-center">
              <a class="accountCreate" href="#">
                Create New Account
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
