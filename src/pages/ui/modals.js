import React,{ Component } from 'react';
import {
    Button,
    Card,
    Modal,
    Input
}
from 'antd';
import './index.less';

export default class Modals extends Component{
    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }
    handleOpen = (type) =>{
        this.setState({
            ['showModal'+type]:true
        })
    }
    cancelModal = (type) =>{
        this.setState({
            ['showModal'+type]:false
        })
    }
    handleConfirm = (type) =>{
        Modal[type]({
            title: type.toUpperCase(),
            content:'你确定学会antd的'+type+'模态框了吗？',
            onOk(){
                console.log("ok")
            },
            onCancel(){
                console.log("cancel")
            }
        })
    }
    render(){
        return (
            <div className="modals-wrap">
                <Card title="基础模态框" className="base-modals">
                    <Button type="primary" onClick={()=>this.handleOpen('1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认模态框" className="info-modals">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('error')}>error</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>this.cancelModal(1)}
                >
                    <p>欢迎学习react高级教程，我是最基础的模态框</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了吧"
                    onCancel={()=>this.cancelModal(2)}
                    destroyOnClose={false}
                    closable={false}
                >
                    <p>
                        我的页脚按钮文字变了，并且右上角的关闭按钮没有啦
                    </p>
                    <p>输入文字模态框内容不销毁</p>
                    <Input></Input>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    onCancel={()=>this.cancelModal(3)} 
                    style={{top:"20px"}}
                    mask={false}
                >
                    <p>我的模态框距离顶部20px，需要定义当前style的top值为20px，并且我是没有蒙层的</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    onCancel={()=>this.cancelModal(4)}
                    // wrapClassName="vertical-center-modal"
                    centered={true}
                >
                    <p>我的模态框水平垂直居中，我加了一个外层容器类名来修改外层模态框的位置，该类名为wrapClassName；或者使用内置的centered属性实现</p>
                </Modal>
            </div>
        )
    }
}