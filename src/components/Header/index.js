import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import utils from '../../utils/utils';
import axios from '../../axios';
import './index.less';


class Header extends Component{
    state = {
        userName:'',
        sysTime:utils.formatDate(new Date().getTime()),
        dayPictureUrl:'',
        weather:''
    }
    componentDidMount(){
        setInterval(()=>{
            let sysTime = utils.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.setState({
            userName:"超厉害"
        })
        this.getWeatherAPIData()
    }
    getWeatherAPIData(){
        let city = "北京"; 
        axios.jsonp({
            url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",
        }).then((res)=>{
            console.log(res)
            if(res.status === "success"){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
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
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="天气"/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Header;