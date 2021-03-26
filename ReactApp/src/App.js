import logo from './logo.svg';
import './App.css';
import Main from "./Components/UI/Main/index"
import Home from './Components/UI/Home/index'
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
       <Route path="/home">
            <Main/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          </Router>
        
    </div>
  );
}

export default App;
