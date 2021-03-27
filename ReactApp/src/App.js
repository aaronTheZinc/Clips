import React from 'react'
import logo from './logo.svg';
import './App.css';
import Main from "./Components/UI/Main/index"
import Home from './Components/UI/Home/index'
import './Components/UI/Theme/index.css'
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Main/>
        
    </div>
  );
}

export default App;
