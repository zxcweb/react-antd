import React,{ Component } from 'react';
import {
    Button,
    Card,
    Icon,
    Spin,
    Alert
}
from 'antd';
import './index.less';

export default class Loadings extends Component{
    state = {
    }
    render(){
        const loading_icon = <Icon type="loading" style={{fontSize:"24px"}}/>
        return (
            <div className="loading-wrap">
                <Card title="基本的Spin" className="base-loadings">
                    <Spin size="small"/>
                    <Spin size="default"/>
                    <Spin size="large"/>
                    <Spin indicator={loading_icon} size="default"/>
                    <Spin tip="加载中..."></Spin>
                </Card>
                <Card title="内容遮罩">
                    <Spin tip="加载中..." indicator={loading_icon}>
                    <Alert message="React" description="欢迎来到React高级课程,我是alert框，loading在alert框内部" type="info"/>
                        </Spin>
                </Card>
            </div>
        )
    }
}