import React, { useState } from "react";
import "./index.css";
import MG from '../Assets/MG.png'
export default ({ onSearch, result }) => {

  return (
    <div class="wrapper">
    <div class="container">
      <input type="text" class="input" placeholder="Find Friends"/>
      <button onClick={() => console.log('searched')} type="button" value="GO" class="close-btn"> </button>
    </div>
  </div>
  );
};
