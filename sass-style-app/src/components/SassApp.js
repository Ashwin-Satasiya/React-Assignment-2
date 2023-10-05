import React from "react";

export default function SassApp() {
  return (
    <div>
      <h1 className="Header">Styling with sass</h1>

      <div className="container">
        <nav className="navbar">
          <ul className="list">
            <li>
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Service</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
