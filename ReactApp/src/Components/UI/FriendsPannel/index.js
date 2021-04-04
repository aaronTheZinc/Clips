import React, { Component } from "react";
import axios from "axios";
import Cookies from "../../State/cookies";
import { Username, FriendsPannel } from "./modules";
import "./index.css";
import { Account } from "../Modals/modals";
const baseUrl = process.env.REACT_APP_BASE_URL
export default class Pannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      friends: [],
      open: false,
    };
  }

  componentDidMount() {
    this.fetchFriends();
  }
  toggle = () =>
    this.setState({
      open: !this.state.open,
    });

  fetchFriends = async () => {
    alert(baseUrl)
    const token = Cookies.cookies.readToken();
    const result = axios.get(
      `${baseUrl}/app/api/friends?token=${token}`
    );
    const { data } = await result;
    console.log(data);
    this.setState({
      username: data.friends.username,
      friends: data.friends.friends,
    });
  };
  render() {
    const { username, friends, open } = this.state;
    return (
      <div className="pannel-container">
        <Username
          username={username}
          toggle={this.toggle}

        
        />
        <Account username={username} open={open} toggle={this.toggle} />
        <section className="scroll">
          <FriendsPannel friends={friends} />
        </section>
      </div>
    );
  }
}
