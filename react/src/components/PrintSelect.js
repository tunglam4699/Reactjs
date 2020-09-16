import React, { Component } from "react";
import "./../App.css";
import { Col, Card, Select, Button, Popover } from "antd";
import "./style.scss";
import { Input } from "antd";
import * as actions from "./../actions/index";
import { connect } from "react-redux";
const { Option } = Select;

class PrintSelect extends Component {
  constructor(props) {
    super(props);
  }

  onClickChangeLayout = () => {
    let layout = document.querySelector("#layout");
    let td = layout.getElementsByTagName("td");
    for (let i = 0; i < td.length; i++) {
      td[i].onmouseover = (e) => {
        this.alertRowCell(e, td);
      };
      td[i].onclick = (e) => {
        let cell = e.target || window.event.srcElement;
        let row = cell.parentNode.rowIndex + 1;
        let col = cell.cellIndex + 1;
        this.props.onClickChangeLayout(row, col);
      };
    }
  };

  alertRowCell = (e, td) => {
    let cell = e.target || window.event.srcElement;
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    for (let i = 0; i < td.length; i++) {
      td[i].classList.remove("sel");
    }
    for (let i = 0; i < row + 1; i++) {
      for (let j = 0; j < col + 1; j++) {
        if (i === 0) {
          td[i + j].classList.add("sel");
        } else {
          td[i * 3 + j].classList.add("sel");
        }
      }
    }
  };
  onSelectProperty = (property) => {
    this.props.onAddProperty(property);
  };
  onChange = (name, value) => {
    // var target = event.target;
    // var name = target.name;
    // var value = target.value;
    // console.log(name, value);
    this.props.onAddProperty({ name, value });
  };

  render() {
    return (
      <Col span={8}>
        <Card>
          <label>Prints</label>
          <br></br>
          <Select
            className="select"
            name="print"
            onChange={(value) => this.onChange("print", value)}
          >
            <Option value="machine1">Machine 1</Option>
            <Option value="machine2">Machine 2</Option>
            <Option value="machine3">Machine 3</Option>
            <Option value="machine4">Machine 4</Option>
          </Select>
          <br></br>
          <label>Film Size</label>
          <br></br>
          <Select
            className="select"
            name="size"
            onChange={(value) => this.onChange("size", value)}
          >
            <Option value="a0">A0</Option>
            <Option value="a1">A1</Option>
            <Option value="a2">A2</Option>
            <Option value="a3">A3</Option>
            <Option value="a4">A4</Option>
          </Select>
          <br></br>
          <label>Film Orientation</label>
          <br></br>
          <Select
            className="select"
            name="orientation"
            onChange={(value) => this.onChange("orientation", value)}
          >
            <Option value="portrait">Portrait</Option>
            <Option value="landscape">Landscape</Option>
          </Select>
          <br></br>
          <label>Color Mode</label>
          <br></br>
          <Select
            className="select"
            name="colorMode"
            onChange={(value) => this.onChange("colorMode", value)}
          >
            <Option value="gray">Gray</Option>
            <Option value="scale">Scale</Option>
            <Option value="rgb">RGB</Option>
          </Select>
          <br></br>
          <div>
            <label>layout</label>
            <Popover
              placement="bottom"
              content={
                <div id="layout">
                  <table className="cinereousTable">
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
              trigger="focus"
            >
              <Button
                onClick={this.onClickChangeLayout}
                size="normal"
                type="primary"
                style={{ margin: 5, float: "right" }}
              >
                3x3
              </Button>
            </Popover>
          </div>
          <br></br>
          <label>Display Tags</label>
          <br></br>
          <Select
            className="select"
            name="displayTags"
            onChange={(value) => this.onChange("displayTags", value)}
          >
            <Option value="hd">HD</Option>
            <Option value="fhd">FHD</Option>
            <Option value="4k">4K</Option>
          </Select>
          <br></br>
          <label>Image Step</label>
          <br></br>
          <Input
            placeholder="number"
            name="imgStep"
          ></Input>
          <br></br>
          <Button
            style={{ margin: 5 }}
            type="primary"
            onClick={this.onSelectProperty}
          >
            Print
          </Button>
        </Card>
      </Col>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddProperty: (property) => {
      dispatch(actions.selectAll(property));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PrintSelect);
