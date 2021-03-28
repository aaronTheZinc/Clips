import React, { useState } from "react";
import "./index.css";
import MG from '../Assets/MG.png'
export default ({ onSearch, result }) => {
  return (
    <div class="wrapper">
    <div class="container">
      <input type="text" class="input" placeholder="Find Friends"/>
      <input type="button" value="GO" class="close-btn"/>
    </div>
  </div>
  );
};
