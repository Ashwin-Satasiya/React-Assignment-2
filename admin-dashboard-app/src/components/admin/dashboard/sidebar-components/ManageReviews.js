import React from "react";
import { Link } from "react-router-dom";
export default function ManageReviews() {
  return (
    <div>
      <p>ManageReviews</p>

      <Link to="/layout-admin">
        {" "}
        <button className="btn btn-danger">Go to Dashboard Home</button>
      </Link>
    </div>
  );
}
