import React, { Component } from "react";
import Nav from "../Nav/index";
import Chat from "../Chat/main";
import Hub from '../Base/index';
import {HubProvider,} from '../../State/UserProvider'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav /> 

        <Router>
        <Switch>
          <Route path="/hub">
            <HubProvider>
          <Hub/>
          </HubProvider>
          </Route>
         
          <Route path="/">
                home sweet home
          </Route>
        </Switch>
      
    </Router>
      </div>
    );
  }
}

export default index;
