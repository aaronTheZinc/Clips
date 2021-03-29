import React, {useContext, useEffect} from "react";
import {SocketContext} from '../State/Context'
import {Socket} from '../State/UserProvider'
const io = require("socket.io-client");
const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);

const SocketComponent = () => {
 

    useEffect(() =>{
        socket.emit("handShake", {username: "aaron"})
        socket.on('handShake', ({token})=> {
        
         document.cookie =`token=${token}`
            console.log('completed handShake!')
        } )
    }) 
    return <></>
}
export default ({children}) => (
    <Socket>
        <SocketComponent/>
        {children}
    </Socket>
)