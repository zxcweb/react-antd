import React, { Component } from "react";
import { Card, Table, Modal, Button, message } from "antd";
import utils from '../../utils/utils';
import axios from '../../axios';
import './index.less'

export default class BasicTable extends Component {
	state = {
		dataSource:[],
		dataSource2:[],
		data:[],
		selectedRowKeys:[0],
		selectedRowKeys2:[],
		selectedRows:[],
		selectedIds:[],
		pagination:null
	}
	params  = {
		page:1
	}
	request = () =>{
		axios.ajax({
			url:'/table/list',
			data:{
				params:{
					page:1
				}
			}
		})
			.then((res)=>{
				if(res.code==0){
					let data = res.result.map((item)=>{
						return {
							...item,
							key:item.id
						}
					})
					this.setState({
						dataSource:data
					})
				}
			})
	}
	request2 = () =>{
		axios.ajax({
			url:'/table/list-pages',
			data:{
				params:{
					page:this.params.page
				}
			}
		})
			.then((res)=>{
				if(res.code==0){
					let data = res.result.list.map((item)=>{
						return {
							...item,
							key:item.id
						}
					})
					this.setState({
						dataSource2:data,
						pagination:utils.pagination(res,(current)=>{
							this.params.page = current;
							this.request2()
						})
					})
				}
			})
	}
	componentDidMount(){ 
		this.request();
		this.request2()
	}
	onRowClick = (record,index) =>{
		let selectKey = [index+1];
		Modal.info({
			title:'信息',
			content:`用户名：${record.userName},用户爱好${record.hobby}`
		})
		console.log(selectKey)
		this.setState({
			selectedRowKeys:selectKey,
			selectedItem:record
		})
	}
	handleDelete = () =>{
		let rows = this.state.selectedRows;
		let ids = rows.map((item)=>item.id);
		Modal.confirm({
			title:"提示",
			content:`列表项id为${ids.join('、')}将要被删除`,
			onOk:()=>{
				message.info("删除成功")
			}
		})
	}
  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "userName"
      },
      {
        title: "状态",
        dataIndex: "state",
				render(res){
					return res==1?"结婚":"未婚"
				}
      },
      {
        title: "爱好",
        dataIndex: "hobby"
      },
      {
        title: "生日",
        dataIndex: "borth"
      },
      {
        title: "地址",
        dataIndex: "address"
      }
    ];
		const rowSelection = {
			type:'radio',
			selectedRowKeys:this.state.selectedRowKeys
		}
		const rowCheckSelection = {
			type:'checkbox',
			selectedRowKeys:this.state.selectedRowKeys2,
			onChange:(selectedRowKeys2,selectedRows) => {
				this.setState({
					selectedRowKeys2,
					selectedRows
				})
			}
		}
    return (
      <div className="table-box">
        <Card title="基础表格">
          <Table 
					 	bordered
						columns={columns} 
						dataSource={this.state.dataSource.slice(0,4)}
						pagination={false}
					/>
        </Card>
				<Card title="动态数据表格">
          <Table 
					 	bordered
						columns={columns} 
						dataSource={this.state.dataSource}
						pagination={false}
					/>
        </Card>
				<Card title="单选数据表格">
          <Table 
					 	bordered
						columns={columns} 
						rowSelection={rowSelection}
						dataSource={this.state.dataSource}
						pagination={false}
						onRow={(record,index)=>{
							return {
								onClick:()=>this.onRowClick(record,index)
							}
						}}
					/>
        </Card>
				<Card title="复选数据表格">
					<Button onClick={this.handleDelete} style={{marginBottom:'10px'}}>删除</Button>
          <Table 
					 	bordered
						columns={columns} 
						rowSelection={rowCheckSelection}
						dataSource={this.state.dataSource}
						pagination={false}
					/>
        </Card>
				<Card title="分页表格">
          <Table 
					 	bordered
						columns={columns} 
						dataSource={this.state.dataSource2}
						pagination={this.state.pagination}
					/>
        </Card>
      </div>
    );
  }
}
