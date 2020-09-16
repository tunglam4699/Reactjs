import React, { Component } from "react";
import { Col, Card, Button } from "antd";

class PrintImage extends Component {
  constructor(props) {
    super(props);
    this.state = { viewports: [] };
  }

  componentDidMount = () => {
    this.createViewport();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.layout !== this.props.layout) {
      this.createViewport();
    }
  };

  createViewport = () => {
    const { row, col } = this.props.layout;
    const viewports = [];
    for (let index = 0; index < row * col; index++) {
      const element = { width: 100 / col, height: 100 / row };
      viewports.push(element);
    }
    this.setState({ viewports });
  };

  render() {
    console.log(this.props.layout);
    return (
      <Col span={16}>
        <Card>
          <div style={{ width: "100%", height: 512, background: "black" }}>
            {this.state.viewports.map((item, index) => {
              return (
                <div
                  key={"viewports" + index}
                  style={{ width: item.width + "%", height: item.height + "%",float: "left",border:"1px solid #cccccc"}}
                ></div>
              );
            })}
          </div>
        </Card>
      </Col>
    );
  }
}

export default PrintImage;
