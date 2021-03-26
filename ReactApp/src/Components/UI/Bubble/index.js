import React from "react";
import "./index.css";
const index = ({ header, text }) => {
  return (
    <div className="bubble-container">
      <div style={{ float: "right" }}>
        <section style={{ marginLeft: "5vw" }}>
          <label className="header-label">{header}</label>
        </section>
        <div style={{ marginTop: "2vh", marginLeft: "6vw" }}>
          <p> {text} </p>
        </div>
        <div style={{ float: "right" }}>

        </div>
      </div>
    </div>
  );
};

export default index;
