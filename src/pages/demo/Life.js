import React,{ Component } from 'react';
import Child from './Child';

export default class Life extends Component{
    state = {
        count:0
    }
    handleAdd = () =>{
        this.setState({
            count:this.state.count+1
        })  
    }
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <h1>react 生命周期</h1>
                <button onClick={this.handleAdd}>加一</button>
                <p>{this.state.count}</p>
                <div>
                    <Child count={this.state.count}/>
                </div>
            </div>
        )
    }
}