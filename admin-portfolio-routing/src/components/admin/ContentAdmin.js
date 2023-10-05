import React from "react";

import { Container, Row, Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import dash1 from "../admin/Images/Dash-1.jpg";
import dash2 from "../admin/Images/Dash-2.jpg";
import dash3 from "../admin/Images/Dash-3.jpg";
import dash4 from "../admin/Images/Dash-4.jpg";

export default function DashboardAdmin() {
  return (
    <div>
      <Row className="">
        <div className="col-md-3">
          <Card className="border-0 bg-warning">
            <Card.Body>
              <Card.Img src={dash1} alt="Dash one" />
              <CardHeader>Users</CardHeader>
              <Card.Text>29K</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
          <Card className="border-0 bg-warning">
            <Card.Body>
              <Card.Img src={dash2} alt="Dash one" />
              <CardHeader>Income</CardHeader>
              <Card.Text>27 Lac</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
          <Card className="border-0 bg-warning">
            <Card.Body>
              <Card.Img src={dash3} alt="Dash one" />
              <CardHeader>Conversion Rate</CardHeader>
              <Card.Text>2.46%</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3">
          <Card className="border-0 bg-warning">
            <Card.Body>
              <Card.Img src={dash4} alt="Dash one" />
              <CardHeader>Sessions</CardHeader>
              <Card.Text>57K</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
}
