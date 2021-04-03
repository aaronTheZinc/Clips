import React, { Component } from "react";
import "./index.css";
import ClipView from "./clip-cell";
import {Account as AccountModal} from '../Modals/modals'
export default class ClipsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4],

    };
  }
  setOpen = () => this.setState({})
  render() {
    const { data } = this.state;
    return (
      <div className='clips-parent' style={{ backgroundColor: '#f2f2f2', height: "100vh", borderRadius:'20px' }}>
        <section style={{ marginTop: "3vh" }}>
          <label className="header-lbl" style={{ fontSize: "70px", color: "#FF8300" }}>CLIPS</label>
        </section>
        <div className="video-container">
          {data.map((clip) => {
            return <ClipView />;
          })}
        </div>
      </div>
    );
  }
}
