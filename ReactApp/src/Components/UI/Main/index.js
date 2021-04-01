import React, { Component, useContext } from "react";
import Nav from "../Nav/index";
import Chat from "../Chat/main";
import Hub from "../Base/index";
import { SocketContext } from "../../State/Context";
import { HubProvider } from "../../State/UserProvider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {SocketProvider as Connection} from "../../Backend/Backend";
import { isMobile } from "react-device-detect";
import MobileView from "../Mobile/index";
import Login from '../SignIn/index'
const Main = (props) => {
  return (
    <div>
      <Nav />
      {!isMobile === true ? (
        <Router>
          <Switch>
            <Route path="/hub">
              <HubProvider>
                <Hub />
              </HubProvider>
            </Route>
            <Route path="/login">
             <Login/>
            </Route>

            <Route path="/">home sweet home</Route>
          </Switch>
        </Router>
      ) : (
        <MobileView />
      )}
    </div>
  );
};

export default () => {
  return (
    <Connection>
      <Main />
    </Connection>
  );
};
