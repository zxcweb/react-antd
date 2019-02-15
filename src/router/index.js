import React,{ Component } from 'react';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import App from '../App'; 
import Login from '../pages/login';
import Admin from '../Admin';

import Buttons from '../pages/ui/buttons';
import Modals from '../pages/ui/modals';
import NotMatch from '../pages/nomatch';

export default class RouterView extends Component{
    render(){
        return (
            <Router>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render={()=>(
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons}/>
                                <Route path='/admin/ui/modals' component={Modals}/> 
                                <Route component={NotMatch}/> 
                            </Switch>
                        </Admin>
                    )}/>
                    <Route path='/order/detail' component={Login}/>
                </App>
            </Router>
        )
    }
}