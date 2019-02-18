import React,{ Component } from 'react';
import {
    Button,
    Card,
    Icon,
    Radio,
    message
}
from 'antd';
import './index.less';

export default class Messages extends Component{
    state = {
    }
    openNotification = (type,position) => {
        message[type]("恭喜你!!学会了React框架")
    }
    render(){
        return (
            <div className="not-wrap">
                <Card title="全局提醒框" className="msg-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>error</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("loading")}>loading</Button>
                </Card>
            </div>
        )
    }
}