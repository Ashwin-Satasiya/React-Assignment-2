import React from "react";

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h3 className=" mt-3 text-center">Page is not found</h3>

      <div className="mt-4 text-center">
        <Link to="/">
          <button className="btn btn-danger" type="button">
            Click for go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
