import React, { Component, useState } from "react";
import { List } from "semantic-ui-react";
import "./index.css";
export const Username = ({ username, toggle}) => (
  <div onClick={() => toggle()} className="username-container" >
    <label>{username}</label>
  </div>
);

export const FriendsPannel = ({ friends }) => {
  return (
    <div>
      <div className="friends-page">
   
          <List bulleted>
            {friends.map((friend, index) => (
              <section style={{textAlign: 'left', fontWeight: 'bolder',marginTop: '50px'}}>
              <List.Item
              key={index}
                as="a"
                style={{ color: "black", fontSize: "40px", paddingLeft: '20%' }}
                content={`☘️ ${friend}`}
                target="_blank"
              /> 
              <br/>
              </section>
            ))}
           
          </List>
      
      </div>
    </div>
  );
};
