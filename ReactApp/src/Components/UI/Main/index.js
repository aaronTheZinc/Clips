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
import { AppState } from "../../State/UserProvider";
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
            <Switch>
              <Route path="/hub">
                <AppState>
                  <Hub auth={this.state.auth} />
                </AppState>
              </Route>
              <Route path="/login">
                <Login test='ss'  setAuth={this.setAuth} />
              </Route>
              <Route path="/register">
                <Register />
              </Route>

              <Route path="/">home sweet home</Route>
            </Switch>
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
