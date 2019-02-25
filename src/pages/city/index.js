import React, { Component } from "react";
import { Card, Button, Table, Modal, message } from "antd";
import axios from "../../axios";
import utils from "../../utils/utils";
import FilterForm from "./FilterForm";
import OpenCityForm from "./OpenCityForm";

export default class City extends Component {
  state = {
    list: [],
    pagination: "",
    isShowOpenCity: false
  };
  modalValue = {};
  params = {
    page: 1
  };
  handleOpenCity = () => {
    this.setState({
      isShowOpenCity: true
    });
  };
  onSubmit = () => {
    let cityInfo = this.modalValue.props.form.getFieldsValue();
    axios
      .ajax({
        url: "/city/open",
        data: {
          params: {
            cityInfo
          }
        }
      })
      .then(res => {
        if (res.code == "0") {
          message.success(res.result);
          this.setState({
            isShowOpenCity: false
          });
        }
      });
    console.log(cityInfo);
  };
  requestList = () => {
    axios
      .ajax({
        url: "/open_list",
        data: {
          params: {
            page: this.params.page
          }
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          list: res.result.item_list.map(item => {
            return {
              ...item,
              key: item.id
            };
          }),
          pagination: utils.pagination(res, current => {
            this.params.page = current;
            this.requestList();
          })
        });
      });
  };
  componentDidMount() {
    this.requestList();
  }
  searchList = (value) => {
    this.requestList(value)
  };
  thisItem = (id) =>{
    //跳转详情页面
    window.open('/#/common/order/detail/'+id,'_blank');
  }
  render() {
    const columns = [
      {
        title: "城市ID",
        dataIndex: "id"
      },
      {
        title: "城市名称",
        dataIndex: "name"
      },
      {
        title: "用车模式",
        dataIndex: "mode"
      },
      {
        title: "营运模式",
        dataIndex: "op_mode"
      },
      {
        title: "授权加盟商",
        dataIndex: "franchisee_name"
      },
      {
        title: "城市管理员",
        dataIndex: "city_admins",
        render(arr) {
          return arr
            .map(item => {
              return item.user_name;
            })
            .join(",");
        }
      },
      {
        title: "城市开通时间",
        dataIndex: "open_time"
      },
      {
        title: "操作时间",
        dataIndex: "update_time",
        render: utils.formatDate
      },
      {
        title: "操作人",
        dataIndex: "sys_user_name"
      },
      {
        title: '详情', dataIndex: '', 
        key: 'x', 
        render: (res) => {
          return (
            <Button 
              type="primary" 
              size="small" 
              onClick={()=>this.thisItem(res.id)}
            >
              详情&gt;&gt;
            </Button>
          )
        },
      },
    ];
    return (
      <div>
        <Card>
          <FilterForm searchListFun={this.searchList} />
        </Card>
        <Card style={{ marginTop: "8px" }}>
          <Button type="primary" onClick={this.handleOpenCity}>
            开通城市
          </Button>
        </Card>
        <div className="table-content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={() => {
            this.setState({
              isShowOpenCity: false
            });
          }}
          onOk={this.onSubmit}
          destroyOnClose={true}
        >
          <OpenCityForm
            wrappedComponentRef={inst => {
              this.modalValue = inst;
            }}
          />
        </Modal>
      </div>
    );
  }
}
