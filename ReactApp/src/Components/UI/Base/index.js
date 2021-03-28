import React, { Component } from "react";
import ClipBar from "../ClipBar/main";
import ChatView from '../Chat/main'
import SearchBar from '../SearchBar/index';
import "./base.css";
export default class index extends Component {
  render() {
    return (
      <div className="container-main">
        <div style={{textAlign: 'center', justifyContent: 'center'}}>
          <SearchBar />
        </div>
        <div className="float-wrapper">
          <div style={{ float: "left" }}>
            <ClipBar />
          </div>
          <div style={{ marginLeft: "40vw"}}>
            <ChatView />
          </div>
        </div>
      </div>
    );
  }
}
