import React from "react";
import { Link } from "react-router-dom";
export default function ClientAdd() {
  return (
    <div>
      <p>ClientAdd</p>

      <Link to="/layout-admin">
        {" "}
        <button className="btn btn-danger">Go to Dashboard Home</button>
      </Link>
    </div>
  );
}
