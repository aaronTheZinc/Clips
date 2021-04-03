import React, {useContext, useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import Main from "./Components/UI/Main/index"
import Home from './Components/UI/Home/index'
import './Components/UI/Theme/index.css'
import {appState as AppState} from './Components/State/Context'
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const reducer = (state, action) => {
    switch(action.type) {
      case "uid":
            state.uid = action.value
      default:
        return state
    }
  }
  const initialState = {uid: ''};
  const [state, dispatch] = useReducer(reducer, initialState )
  return (
    <div className="App">
      <AppState.Provider value={{state, dispatch}}>
      <Main/>
      </AppState.Provider>
     
        
    </div>
  );
}

export default App;
