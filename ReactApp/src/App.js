import React, {useContext, useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import Main from "./Components/UI/Main/index"
import Home from './Components/UI/Home/index'
import './Components/UI/Theme/index.css'
import {AppState} from './Components/State/UserProvider'
import {appState} from './Components/State/Context'
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const reducer = (state, action) => {
    switch(action.type) {
      case "increment":
        return {
          count: state.count + 3,
          message: state.count
        }
      case "decrement":
        return {
          count: state.count - 1,
          message: action.message
        }
        case "reset":
          return {
            count: 0,
            message: action.message
          }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  const initialState = {count: 0, message: ""};
  const [state, dispatch] = useReducer(reducer, initialState )
  const {Provider} = appState
  return (
    <div className="App">
      <Provider value={{state, dispatch}}>
      <Main/>
      </Provider>
     
        
    </div>
  );
}

export default App;
