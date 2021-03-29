import React, { Component } from "react";
import axios from 'axios'
import Cookies from '../../State/cookies'
import "./index.css";
export default class Pannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {

        }
    }
    this.fetchFriends = this.fetchFriends.bind(this)
  }
  
  componentDidMount() {
    const data = this.fetchFriends()
     this.setState({data: data})
  }
  fetchFriends = async() => {
    const token = Cookies.cookies.readToken()
    const result = axios.get(`http://localhost:5000/app${token}`)
        const {data} = await result
        console.log(data)

        return data
  }
  render() {
      const {username} = this.state
    return <div className="pannel-container">
        <label>Test</label>
    </div>;
  }
}
