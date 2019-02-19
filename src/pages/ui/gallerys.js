import React,{ Component } from 'react';
import {
    Card,Row,Col,Modal
}
from 'antd';
// import LazyLoad from 'react-lazyload';
import './index.less';


export default class Gallery extends Component{
    state = {
        imgSrc:'',
        visible:false
    }
    showImage = (imgSrc) =>{
        this.setState({
            visible:true,
            imgSrc
        })
    }
    render(){
        const imgs = [
            ["1.png","2.png","3.png","4.png","5.png"],
            ["6.png","7.png","8.png","9.png","10.png"],
            ["11.png","12.png","13.png","14.png","15.png"],
            ["16.png","17.png","18.png","19.png","20.png"],
            ["21.png","22.png","23.png","24.png","25.png"]
        ];  
        const imgList = imgs.map((list,index)=>{
            let md=5
            if(index===4){
                md = 4;
            }
            return (
                <Col md={md} key={index}>
                    {
                        list.map((item)=>{
                            let src = "/assets/gallery/"+item;
                            return <Card 
                                        cover={<img src={src} onClick={()=>this.showImage(item)}/>}
                                        key={item} 
                                        style={{marginBottom:"8px"}}
                                    >
                                    <Card.Meta
                                        title="React Admin"
                                        description="I love you 图片画廊"
                                    />
                             </Card>
                        })
                    }
                </Col>
            )
        })
        return (
            <div className="gal-wrap">
                <Row gutter={8}>
                    {imgList}
                </Row>
                <Modal 
                    visible={this.state.visible}
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                    header={null}
                >
                    <img src={"/assets/gallery/"+this.state.imgSrc} alt="" style={{width:"100%"}}/>
                </Modal>
            </div>
        )
    }
}