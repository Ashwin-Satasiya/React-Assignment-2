import React from "react";

import { Link } from "react-router-dom";

export default function SkillCategories() {
  return (
    <div>
      <p> SkillCategories</p>
      <Link to="/layout-admin">
        {" "}
        <button className="btn btn-danger">Go to Dashboard Home</button>
      </Link>
    </div>
  );
}
