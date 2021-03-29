import React, { Component } from "react";
import axios from "axios";
import Cookies from "../../State/cookies";
import { Username, FriendsPannel  } from "./modules";
import "./index.css";
export default class Pannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      friends: []
    };
  }

  componentDidMount() {
    this.fetchFriends();
  }
  fetchFriends = async () => {
    const token = Cookies.cookies.readToken();
    const result = axios.get(
      `http://localhost:5000/app/api/friends?token=${token}`
    );
    const { data } = await result;
    console.log(data);
    this.setState({ username: data.friends.username, friends: data.friends.friends  });
  };
  render() {
    const { username, friends } = this.state
    console.log('friends --', this.state)
    return (
      <div className="pannel-container">
        <Username username={username} />
        <section className='scroll'>
        <FriendsPannel friends={ friends } />
        </section>
      </div>
    );
  }
}
