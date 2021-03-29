import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
import Cookies from './cookies'
import {hub as HubContext} from './Context'
import {SocketContext, socket} from './Context';


import {initiateSocket} from '../Backend/Backend.js';
const baseUrl = 'http://localhost:5000'
// This context provider is passed to any component requiring the context



export const HubProvider = ({children}) =>{
    const [data, setData] = useState(null)
  
    const [pageData, setPageData ] = useState()
    const [loaded, setLoaded] = useState(false)
    useEffect(async() => {
      const token = Cookies.cookies.readToken()
      const api_result = await axios.get(`${baseUrl}/hub?token${token}`)
          const {data} = api_result;
              if(!data.status === 403) {
                  setLoaded(true);
                  setPageData(data)
              } else {
                  return 'Error'
              }
              
    },[])
   const { Provider } = HubContext
   return(
       <Provider value={{data:'Hello from context!'}}>
           {children}
       </Provider>
   )
}

export const Socket = ({children}) => {
    const [token, setToken] = useState('')
    useEffect(() => {

    },[])
    const {Provider } = SocketContext
   
    return (
        <Provider value={{token, setToken}}>
            {children}
        </Provider>
    )
}