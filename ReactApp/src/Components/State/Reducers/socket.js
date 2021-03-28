import {useReducer} from 'react'
import io from 'socket.io-client'
const socket = io.createSocket('http://localhost:5000')

const reducer = (state, action) => {
    switch (action.call) {
        case 'connect':
            socket.on("connect", data => {
                setResponse(data);
              });
    }
}
const [status, dispatch] = useReducer()
export default {status: status, dispatch: dispatch}