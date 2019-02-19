import React,{Component} from 'react';
import {
    Card,Carousel
}
from 'antd';
import './index.less';

export default class Carousels extends Component{
    render(){
        return (
            <div className="cl-box">
                <Card title="文字轮播" className="word-wrap">
                    <Carousel 
                        autoplay={true}
                        effect={"fade"}
                    >
                        <div><h3>第一篇</h3></div>
                        <div><h3>第二篇</h3></div>
                        <div><h3>第三篇</h3></div>
                        <div><h3>第四篇</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="word-wrap word-cl">
                    <Carousel 
                        autoplay={true}
                        
                    >
                        <div><img src="/assets/carousel-img/carousel-1.jpg" alt="#"/></div>
                        <div><img src="/assets/carousel-img/carousel-2.jpg" alt="#"/></div>
                        <div><img src="/assets/carousel-img/carousel-3.jpg" alt="#"/></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}