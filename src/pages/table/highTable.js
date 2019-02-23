import React, { Component } from "react";
import { Card, Table, Modal, Button, message } from "antd";
import utils from "../../utils/utils";
import axios from "../../axios";
import "./index.less";

export default class HighTable extends Component {
  state = {
    dataSource: [],
    sortOrder:''
  }
  handleChange = (page,filter,sorter) =>{
    console.log(sorter)
    this.setState({
      sortOrder:sorter.order
    })
  }
  request = () => {
    axios
      .ajax({
        url: "/table/list",
        data: {
          params: {
            page: 1
          }
        }
      })
      .then(res => {
        if (res.code == 0) {
          let data = res.result.map(item => {
            return {
              ...item,
              key: item.id
            };
          });
          this.setState({
            dataSource: data
          });
        }
      });
  };
  componentDidMount() {
    this.request();
  }
  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        width:80
      },
      {
        title: "用户名",
        dataIndex: "userName",
        width:80
      },
      {
        title: "状态",
        dataIndex: "state",
        width:80,
        render(res) {
          return res == 1 ? "结婚" : "未婚";
        }
      },
      {
        title: "爱好",
        width:80,
        dataIndex: "hobby"
      },
      {
        title: "生日",
        dataIndex: "borth",
        width:120
      },
      {
        title: "地址",
        dataIndex: "address",
        width:120
      }
    ];
    const columns2 = [
      {
        title: "id",
        dataIndex: "id",
        width:80,
        fixed:'left'
      },
      {
        title: "用户名",
        dataIndex: "userName",
        width:80,
        fixed:'left'
      },
      {
        title: "状态",
        dataIndex: "state",
        width:80,
        render(res) {
          return res == 1 ? "结婚" : "未婚";
        }
      },
      {
        title: "爱好",
        width:80,
        dataIndex: "hobby"
      },
      {
        title: "生日",
        dataIndex: "borth",
        width:120
      },
      {
        title: "生日",
        dataIndex: "borth",
        width:120
      },
      {
        title: "生日",
        dataIndex: "borth",
        width:120
      },
      {
        title: "生日",
        dataIndex: "borth",
        width:120
      },
      {
        title: "生日",
        dataIndex: "borth",
        width:120
      },
      {
        title: "生日",
        dataIndex: "borth",
        width:120
      },

      {
        title: "地址",
        dataIndex: "address",
        width:120,
        fixed:'right'
      }
    ];
    const columns3 = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "用户名",
        dataIndex: "userName",
      },
      {
        title: "状态",
        dataIndex: "state",
        render(res) {
          return res == 1 ? "结婚" : "未婚";
        }
      },
      {
        title: "爱好",
        dataIndex: "hobby"
      },
      {
        title: "生日",
        dataIndex: "borth",
        sorter:(a,b)=>{
          return new Date(a.borth).getTime() - new Date(b.borth).getTime()
        },
        sortOrder:this.state.sortOrder
      },
      {
        title: "地址",
        dataIndex: "address",
      }
    ];
    return (
      <div className="table-box">
        <Card title="头部固定表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{
              y:240
            }}
          />
        </Card>
        <Card title="左侧固定表格">
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{
              x:1160
            }}
          />
        </Card>
        <Card title="可排序表格">
          <Table
            bordered
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
      </div>
    );
  }
}
