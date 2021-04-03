import React, { Component, useContext } from "react";
import Nav from "../Nav/index";
import Chat from "../Chat/main";
import Hub from "../Base/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SocketProvider as Connection } from "../../Backend/Backend";
import { isMobile } from "react-device-detect";
import MobileView from "../Mobile/index";
import Login from "../SignIn/index";
import Register from "../SignIn/register";

import { fb_auth } from "../../State/firebase";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        uid: "",
        isAuthenticated: false,
      },
    };
  }
  componentDidMount() {

  }
  setAuth = ({uid, state}) =>{
    console.log(uid, state)
    this.setState({auth: {uid: uid, isAuthenticated: state}})
  }  
  componentDidMount() {}
  render() {
    const { auth, setAuth } = this.state;
    return (
      <div>
        <Nav />
        {!isMobile === true ? (
          <Router>

              <Route path="/hub" component={Hub} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register}>
              </Route>

      
          </Router>
        ) : (
          <MobileView />
        )}
      </div>
    );
  }
}

export default () => {
  return (
    <Connection>
      <Main />
    </Connection>
  );
};
