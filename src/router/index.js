import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Admin from "../Admin";
import Common from "../Common";

import Buttons from "../pages/ui/buttons";
import Modals from "../pages/ui/modals";
import Loadings from "../pages/ui/loadings";
import Notice from "../pages/ui/notice";
import Messages from "../pages/ui/messages";
import Tabs from "../pages/ui/tabs";
import Gallery from "../pages/ui/gallerys";
import Carousels from "../pages/ui/carousel";
import LoginForm from "../pages/form/login";
import Register from "../pages/form/register";
import BasicTable from "../pages/table/basicTable";
import HighTable from "../pages/table/highTable";
import City from "../pages/city";
import NotMatch from "../pages/nomatch";

export default class RouterView extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/Loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notice} />
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route path="/admin/ui/tabs" component={Tabs} />
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/ui/carousel" component={Carousels} />
                  <Route path="/admin/form/login" component={LoginForm} />
                  <Route path="/admin/form/reg" component={Register} />
                  <Route path="/admin/table/basic" component={BasicTable} />
                  <Route path="/admin/table/high" component={HighTable} />
                  <Route path="/admin/city" component={City} />
                  <Route component={NotMatch} />
                </Switch>
              </Admin>
            )}
          />
          <Route path="/common" render={() => (
            <Common>
              <Route path='/common/order/detail/:orderId' component={null}/>
            </Common>
            )} />
        </App>
      </Router>
    );
  }
}
