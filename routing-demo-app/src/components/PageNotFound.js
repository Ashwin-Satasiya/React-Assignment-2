import React from "react";

import { Container, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <Container>
        <h2 className="mt-3 w-50 p-3 bg-danger text-center text-white mx-auto">
          Page not found
        </h2>
        <div className="text-center mt-4 ">
          <Link to="/">
            <Button className="bg-primary"> Home </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
