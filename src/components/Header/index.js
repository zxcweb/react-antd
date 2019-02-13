import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import utils from '../../utils/utils';
import './index.less';


class Header extends Component{
    state = {
        userName:''
    }
    componentDidMount(){
        setInterval(()=>{
           utils.formatDate(new Date())
        },1000)
        this.setState({
            userName:"河畔一角"
        })
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="date">2018-5-10</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Header;