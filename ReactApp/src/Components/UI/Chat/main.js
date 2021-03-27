import React, { Component } from "react";
import ChatBubble from "./Bubble/index";
import "./index.css";
import backend from '../../Backend/Backend'
class chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [{
        "header": "Bradley",
        "text": "Hey, hows it going!"
    },
    {
        "header": "Robert",
        "text": "Are we still playing Assasins Creed?"
    },
    {
        "header": "Nate",
        "text": "You are dog shit"
    },
    {
      "header": "Bradley",
      "text": "Hey, hows it going!"
  },
  {
      "header": "Robert",
      "text": "Are we still playing Assasins Creed?"
  },
  {
      "header": "Nate",
      "text": "You are dog shit"
  },{
    "header": "Bradley",
    "text": "Hey, hows it going!"
},
{
    "header": "Robert",
    "text": "Are we still playing Assasins Creed?"
},
{
    "header": "Nate",
    "text": "You are dog shit"
}]

     
    };
  }

componentDidMount() {

}


  render() {
    const { messages } = this.state;
    return (
      <div className="chat-container">
        {
            messages.map((message)=>
             <ChatBubble
            header={message.header}
            text={message.text}
            />)
        }
          
      </div>
    );
  }
}

export default chat;
