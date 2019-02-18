import React,{ Component } from 'react';
import {
    Button,
    Icon,
    Card,
    Tabs,
    message
}
from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;

export default class Tab extends Component{
    state = {
        panes:[],
        activeKey:"1"
    }
    componentDidMount(){
        const panes = [
            {
                title:"Tab 1",
                content:"tab 1",
                key:"1"
            },
            {
                title:"Tab 2",
                content:"tab 2",
                key:"2"
            },
            {
                title:"Tab 3",
                content:"tab 3",
                key:"3"
            }
        ]
        this.setState({
            panes,
            activeKey:panes[0].key
        })
    }
    callback = (type) =>{
        message.info("您选择了页签："+type)
    }
    changeFn = (activeKey) =>{
        this.setState({
            activeKey
        })
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
        } else {
            activeKey = panes[0].key;
        }
        }
        this.setState({ panes, activeKey });
    }
    render(){
        return (
            <div className="tabs-box">
                <Card title="基本页签" className="tabs-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2（我是禁用的）</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="有图标标签页" className="tabs-wrap">
                    <Tabs defaultActiveKey="2">
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                        Tab 1
                        </TabPane>
                        <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                        Tab 2
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="动态页签可编辑" className="tabs-wrap">
                    <Tabs 
                        activeKey={this.state.activeKey}
                        type="editable-card" 
                        onChange={this.changeFn}
                        onEdit={this.handleEdit}
                    >
                        {
                            this.state.panes.map((item)=>{
                                return <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}