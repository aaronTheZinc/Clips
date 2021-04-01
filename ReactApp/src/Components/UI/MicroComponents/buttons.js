import React from "react";
export const Button = ({ action, color, title }) => (
  <button
    onClick={() => action()}
    style={{
      backgroundColor: !color ? "#FF8300" : color,
      width: "80%",
      marginLeft: "10%",
      height: "50px",
      outline: 'none',
      borderRadius:'30px'
    }}
  >
    {title}
  </button>
);
