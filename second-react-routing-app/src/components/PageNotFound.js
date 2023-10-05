import React from "react";

import { Link } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

export default function PageNotFound() {
  return (
    <div>
      <Container>
        <p className="mt-4 p-3 bg-light w-50 text-dark text-center mx-auto">
          Page not found
        </p>

        <p className="text-center">
          <Link to="/">
            <Button className="btn btn-primary">Home</Button>
          </Link>
        </p>
      </Container>
    </div>
  );
}
