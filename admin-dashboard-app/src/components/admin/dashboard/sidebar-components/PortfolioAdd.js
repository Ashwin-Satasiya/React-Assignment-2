import React from "react";

import { Link } from "react-router-dom";

export default function PortfolioAdd() {
  return (
    <div>
      <p>PortfolioAdd</p>
      <Link to="/layout-admin">
        {" "}
        <button className="btn btn-danger">Go to Dashboard Home</button>
      </Link>
    </div>
  );
}
