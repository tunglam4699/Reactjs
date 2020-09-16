import React, { Component } from "react";
import { Table } from "antd";

class PrintTable extends Component {
  render() {
    const dataSource = [
    ];

    const columns = [
      { 
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Port",
        dataIndex: "port",
        key: "port",
      },
      {
        title: "AeTitle",
        dataIndex: "aetitle",
        key: "aetitle",
      },
      {
        title: "Manufacture",
        dataIndex: "manufacture",
        key: "manufacture",
      },
      {
        title: "Model Name",
        dataIndex: "model Name",
        key: "model Name",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Default",
        dataIndex: "Ddfault",
        key: "default",
      }
    ];
    return <Table dataSource={dataSource} columns={columns} size="small" style={{'overflow':'scroll', 'display': 'block'}}/>;
  }
}

export default PrintTable;
