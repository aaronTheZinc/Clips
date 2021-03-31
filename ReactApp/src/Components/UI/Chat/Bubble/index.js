import React from "react";
import "./index.css";
const index = ({ header, text, isFirst }) => {

  return (
    <div className="bubble-container" style={isFirst === true? console.log(true) : {marginTop:'7vh'}}>
      <div style={{ float: "left" }}>
        <section style={{ marginLeft: "5vw" }}>
          <label className="header-label">{header}</label>
        </section>
        <div style={{ marginTop: "2vh", marginLeft: "6vw", color: 'white' }}>
          <p> {text} </p>
        </div>
        <div style={{ float: "right" }}>

        </div>
      </div>
    </div>
  );
};

export default index;
