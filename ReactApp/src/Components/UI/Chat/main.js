import React, { Component } from "react";
import ChatBubble from "../Bubble/index";
import ChatView from './chat'
import "./index.css";
import backend from '../../Backend/Backend'
import chatHandler from './chatHandler'
import Content from './clips'
class chat extends Component {
  constructor() {
    super();
    this.state = {
      messageValue: '',
     
    };
  }

componentDidMount() {

}

onChange = (e) => this.setState({messageValue: e.target.value})


  render() {
    const { messageValue} = this.state;
    return (
      <div className="chat-container">
        <section>
          
        </section>
        <section style={{float: 'right'}}>
        <ChatView 
        location='1'
        />
        </section>
        <section style={{float: 'left'}}>
          <Content />
        </section>
{/*        
        <input onChange={this.onChange}/>
        <button style={{height:'100px', width:'300px', backgroundColor: 'black'}} onClick={()=> this.chat.send(messageValue) }>Upload</button> */}
      </div>
    );
  }
}

export default chat;
