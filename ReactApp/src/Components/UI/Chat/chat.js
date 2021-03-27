import React, {useEffect, useState, useRef} from 'react'
import ChatContainer from '../Bubble/index'
import './index.css'
import io from 'socket.io-client'
const username = "aaronmarsh"
const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"]
});


const Chat = () => {

  const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])
  const socketRef = useRef()

  useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:5000")
			socketRef.current.on("handShake", (token) => {
				console.log(token)
			})
			return () => socketRef.current.disconnect()
		},
		[]
	)
const getSession = () => socketRef.current.emit("handShake", {username: "aaronmarsh"})
  
  
  return (
    <>
    <div className='scroll'>
     {
       [].map(m => {
       return <ChatContainer text={m.text} header={m.header} />
       })
     }
     <button onClick={()=> getSession()}>Hello</button>
     </div>
    
    </>
  );
}

export default Chat;
