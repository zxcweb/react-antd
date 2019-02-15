import React,{ Component } from 'react';
import {
    Button,
    Card,
    Icon,
    Radio
}
from 'antd';
import './index.less';

export default class Buttons extends Component{
    state = {
        loading:true,
        size:'small'
    }
    closeLoading = () =>{
        this.setState({
            loading:!this.state.loading
        })
    }
    btnSizeChange = (e) =>{
        this.setState({
            size:e.target.value
        })
    }
    render(){
        return (
            <div className="btn-wrap">
                <Card title="基础按钮" className="base-btn">
                    <Button type="primary">primary</Button>
                    <Button>default</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="danger">danger</Button>
                    <Button disabled>danger</Button>
                </Card>
                <Card title="图形按钮" className="img-btn">
                    <Button type="primary" icon="plus">创建</Button>
                    <Button type="primary" icon="edit">编辑</Button>
                    <Button icon="search" shape="circle"></Button> 
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="图形按钮" className="loading-btn">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" loading={this.state.loading}>点击加载</Button> 
                    <Button  shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.closeLoading}>
                        {
                            this.state.loading?"点击关闭loading":"点击打开loading"
                        }
                    </Button>
                </Card>
                <Card title="按钮组" className="group-btn">
                    <Button.Group>
                        <Button type="primary"><Icon type="left" />返回</Button>
                        <Button type="primary">前进<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="img-btn">
                    
                    <Button type="primary" size="small">小号按钮</Button>
                    <Button type="primary" size="default">中号按钮</Button>
                    <Button type="primary" size="large">大号按钮</Button>
                    <br/>
                    <br/>
                    <Radio.Group value={this.state.size} onChange={this.btnSizeChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <br/>
                    <br/>
                    <Button type="primary" block size={this.state.size}>block按钮</Button>
                </Card>
            </div>
        )
    }
}