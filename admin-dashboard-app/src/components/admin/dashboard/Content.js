import React from "react";
import { Container, Row } from "react-bootstrap";

import Chart from "react-google-charts";

const data = [
  ["Year", "Contacts", "Reviews", "Profiles", "Menus"],
  ["2019", 1000, 400, 300, 150],
  ["2020", 1170, 460, 200, 180],
  ["2021", 660, 1120, 360, 185],
  ["2022", 1030, 540, 240, 197],
];

const options = {
  title: "Daily activities",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

export default function Content() {
  return (
    <div>
      <Row className=" ms-3 mt-4">
        <div className="col-md-4  bg-dark">
          <h5 className=" mt-2 text-center text-white">
            Total contacts <span className="badge bg-danger">15</span>
          </h5>
        </div>
        <div className="col-md-4  bg-primary">
          <h5 className=" mt-2 text-center text-white">
            Total reviews <span className="badge bg-danger">9</span>
          </h5>
        </div>
        <div className="col-md-4  bg-danger">
          <h5 className=" mt-2 text-center text-white">
            Total profiles <span className="badge bg-warning">7</span>
          </h5>
        </div>
      </Row>
      <Row className="ms-3 mt-3">
        <div className="col-md-4  bg-warning">
          <h5 className=" mt-2 text-center text-white">
            Total menus <span className="badge bg-danger">4</span>
          </h5>
        </div>
        <div className="col-md-4  bg-success">
          <h5 className=" mt-2 text-center text-white">
            Total portfolios <span className="badge bg-danger">3</span>
          </h5>
        </div>
        <div className="col-md-4  bg-info">
          <h5 className=" mt-2 text-center text-white">
            Total customers <span className="badge bg-danger">27</span>
          </h5>
        </div>
      </Row>

      <Row className="mt-5">
        <h4>We are on</h4>
        <div className="col-md-1 bg-warning text-center">
          <i className="bi bi-facebook text-primary fs-3"></i>
        </div>
        <div className="col-md-1 bg-dark text-center ms-3">
          {" "}
          <i className="bi bi-google text-danger fs-3"></i>
        </div>
        <div className="col-md-1 bg-info text-center ms-3">
          {" "}
          <i className="bi bi-twitter text-primary fs-3"></i>
        </div>
      </Row>

      {/* Charts */}
      <div className="mt-3">
        <Chart
          chartType="AreaChart"
          width="90%"
          height="350px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}
