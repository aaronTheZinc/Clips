import React, { Component, useContext } from "react";
import Nav from "../Nav/index";
import Chat from "../Chat/main";
import Hub from '../Base/index';
import {SocketContext} from '../../State/Context'
import {HubProvider} from '../../State/UserProvider'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Connection from '../../Backend/Backend'
const Main = (props) => {


   
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


export default () => {
  return (
    <Connection >
      <Main />
      </Connection>

  )
}
