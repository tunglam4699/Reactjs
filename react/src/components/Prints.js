import React, { Component } from "react";
import "./../App.css";
import PrintSelect from "./PrintSelect";
import PrintImage from "./PrintImage";
import { Row } from "antd";

class Prints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: { row: 1, col: 1 },

    };
  }
  onClickChangeLayout = (row, col) => {
    this.setState({ layout: { row, col } });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <Row>
              <PrintSelect onClickChangeLayout={this.onClickChangeLayout} />
              <PrintImage layout={this.state.layout} />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Prints;
