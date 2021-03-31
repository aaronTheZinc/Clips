import React, { Component, useContext } from "react";
import ClipBar from "../ClipBar/main";
import ChatView from "../Chat/main";
import SearchBar from "../SearchBar/index";
import FriendsPannel from '../FriendsPannel'
import { hub as Context } from "../../State/Context";
import SuggestedFriends from '../NewFriends/index'
import "./base.css";
class Hub extends Component {
  constructor(props) {
    super(props);
    this.context = props.context;
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
  const context = useContext(Context);
  console.log(context);
  return <Hub context={context} />;
};
