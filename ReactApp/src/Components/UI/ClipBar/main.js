import React, { Component } from "react";
import "./index.css";
import ClipView from "./clip-cell";
export default class ClipsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div style={{ backgroundColor: "white", height: "100vh", borderRadius:'20px' }}>
        <section style={{ marginTop: "3vh" }}>
          <label className="header-lbl" style={{ fontSize: "70px", color: "black" }}>Clips</label>
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
