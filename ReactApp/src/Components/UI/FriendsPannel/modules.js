import React, { Component, useState } from "react";
import "./index.css";
export const Username = ({ username }) => (
  <div className="username-container">
    <label>{username}</label>
  </div>
);

export const FriendsPannel = ({ friends }) => {
  return (
    <div>
      <div className='friends-page'>
        {friends.map((friend, index) => {
          return (
            <section className='friends-container' key={index}>
              <label className='card-header'>{friend}</label>
            </section>
          );
        })}
      </div>
    </div>
  );
};
