import React, { useState } from "react";
import "./index.css";
import { mg } from "../Assets/imageStr";
export default ({ onSearch, result }) => {
  return (
    <div className="search-container">
      <section style={{ float: "left" }}>
        <input placeholder="Search" className="searchBar"></input>
      </section>
      <section>
        <img src={mg} />
      </section>
    </div>
  );
};
