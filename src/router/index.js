import React,{ Component } from 'react';
import { HashRouter as Router,Route,Link } from 'react-router-dom';

export default class RouterView extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route path='path' component={component}/>
                    <Route path='path' component={component}/>
                    <Route path='path' component={component}/>
                </div>
            </Router>
        )
    }
}