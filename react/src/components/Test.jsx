import React, { Component } from "react";
import { Tabs } from "antd";
import Prints from "./Prints";
import PrintSetting from "./PrintSetting";
import PrintTasks from "./PrintTasks";
import {
  PrinterFilled,
  SettingFilled,
  UnorderedListOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

class Test extends Component {
  render() {
    return (
      <div className="pd-0">
        <Tabs type="card">
          <TabPane
            tab={
              <span>
                <PrinterFilled />
                Print{" "}
              </span>
            }
            key="1"
          >
            <Prints />
          </TabPane>
          <TabPane
            tab={
              <span>
                <SettingFilled />
                Print Setting{" "}
              </span>
            }
            key="2"
          >
            <PrintSetting />
          </TabPane>
          <TabPane
            tab={
              <span>
                <UnorderedListOutlined />
                Print Tasks{" "}
              </span>
            }
            key="3"
          >
            <PrintTasks />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Test;
