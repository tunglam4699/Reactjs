import React, { Component } from "react";
import PrintTable from "./PrintTable";
import Prints from "./Prints";
import "./../App.css";
import { Row, Col, Card } from "antd";

class PrintSetting extends Component {
  render() {
    return (
      <Row>
        <Col span={10}>
          <Card>
            <PrintTable />
          </Card>
        </Col>
        <Col span={14}>
          <Card>
            <h3 className="text-center">Default Print Setting</h3>
            <Prints />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default PrintSetting;
