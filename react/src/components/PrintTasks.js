import React, { Component } from "react";
import PrintSelect from "./PrintSelect";
import PrintTable from "./PrintTable";
import PrintImage from "./PrintImage";
import { Row, Col, Card } from "antd";
import Prints from "./Prints";
class PrintTasks extends Component {
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

export default PrintTasks;
