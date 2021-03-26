import React, {useEffect, useState} from 'react'
import ChatContainer from '../Bubble/index'
import ChatHandler from './chatHandler'
import './index.css'
import io from 'socket.io-client'
const username = "aaronmarsh"
const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"]
});


const Chat = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("username", 'aaronmarsh');
    });

    socket.on("users", users => {
      setUsers(users);
    });

    socket.on("message", message => {
      setMessages(message);
      console.log()
     
    });

    socket.on("connected", user => {
      setUsers(users => [...users, user]);
    });


  }, []);

 
  
  return (
    <>
    <div className='scroll'>
     {
       messages.map(m => {
       return <ChatContainer text={m.text} header={m.header} />
       })
     }
     </div>
    
    </>
  );
}

export default Chat;
