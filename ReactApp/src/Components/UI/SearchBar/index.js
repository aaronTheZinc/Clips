import React, { useState } from "react";
import "./index.css";
import MG from '../Assets/MG.png'
import { sendFriendRequest } from '../../Backend/api'
export default ({ onSearch, result }) => {
  const [user, setUser] = useState('')
  return (
    <div class="wrapper">
    <div class="container">
      <input type="text" class="input" placeholder="Find Friends" onChange={(e)=> setUser(e.target.value)}/>
      <button onClick={() => sendFriendRequest(user)} type="button" value="GO" class="close-btn"> Go </button>
    </div>
  </div>
  );
};
