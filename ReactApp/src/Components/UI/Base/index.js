import React, { Component, useContext, useEffect, useState } from "react";
import ClipBar from "../ClipBar/main";
import ChatView from "../Chat/main";
import SearchBar from "../SearchBar/index";
import FriendsPannel from '../FriendsPannel'
import { hub as Context, appState } from "../../State/Context";
import SuggestedFriends from '../NewFriends/index'

import {fb_auth} from '../../State/firebase'
import "./base.css";
 class Hub extends Component {
  constructor({auth}) {
    super();
    // this.uid = uid;
    // this.isAuthenticated = isAuthenticated

  }

  render() {
      return (
        <div className="container-main">
          <div className='searchbar-container' style={{ textAlign: "center", justifyContent: "center" }}>
            <SearchBar />
          </div>
          <div className="float-wrapper">
            <div className='clip-bar' style={{ float: "left" }}>
              <ClipBar />
            </div>
            <div className='friends-pannel' style={{ float: "right" }}>
                <FriendsPannel/>
            </div>
            <div style={{ marginLeft: "40vw", marginTop: "15vh" }}>
              <ChatView />
            </div>
          </div>
        </div>
      );
    
  }
}

export default () => {
  const {state} = useContext(appState);
  useEffect(() => {
    console.log('no more prop drilling', state.count)
  },[])
  if(true) {
    return <Hub />
  } else {
    return <h1>Is not auth</h1>
  }
}