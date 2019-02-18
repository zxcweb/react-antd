import React,{ Component } from 'react';
import {
    Button,
    Card,
    Icon,
    Radio,
    notification
}
from 'antd';
import './index.less';

export default class Notice extends Component{
    state = {
    }
    openNotification = (type,position) => {
        notification[type]({
            message:'发工资了',
            description:'上个月考勤22天，迟到一天，实发工资22300',
            placement:position?position:''
        })
    }
    render(){
        return (
            <div className="not-wrap">
                <Card title="通知提醒框" className="notice-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>error</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warn")}>warn</Button>
                </Card>
                <Card title="不同位置的通知提醒框" className="notice-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success","topLeft")}>Success左上</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error","topRight")}>error右上</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info","bottomLeft")}>info左下</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning","bottomRight")}>warning右下</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warn","topRight")}>warn右上</Button>
                </Card>
            </div>
        )
    }
}