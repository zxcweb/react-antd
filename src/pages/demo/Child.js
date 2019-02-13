import React,{ Component } from 'react';
import { Button } from 'antd'

export default class Child extends Component{
    state = {
        count:1
    }
    // static getDerivedStateFromProps(){

    // }
    shouldComponentUpdate(nextProps){
        console.log("shouldComponentUpdate")
        return nextProps !== this.state;
    }
    handleDe = () =>{
        this.setState({
            count:this.state.count - 1
        })
    }
    render(){
        console.log("child render")
        return (
            <div style={{textAlign:"center"}}>
                <h2>Child</h2>
                <span>{this.state.count}</span>
                <br/>
                <Button>点击一下</Button>
                <button onClick={this.handleDe}>减一</button>
            </div>
        )
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return {
            x:window.screen.availHeight
        }
    }
    componentDidUpdate(a,b,c){
        console.log(a,b,c)
    }
}