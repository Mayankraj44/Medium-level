import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Likes } from './components/Likes/Likes';
import { Counter } from './components/Counter/Counter';
import { Robo } from './components/Robot/Robo';
import { Account } from './components/Account/Account';
import { Table } from './components/Table/Table';
import { Stopwatch } from './components/Stopwatch/Stopwatch'

function App() {
  
  return (
    <div className="App">
     <Router>
      <div className="navbar">
        
            <div>
              <Link to="/">Table</Link>
            </div>
            <div>
              <Link to="/robo">Robo</Link>
            </div>
            <div>
              <Link to="/likes">Likes</Link>
            </div>
            
            <div>
              <Link to="/account">Account</Link>
            </div>
            <div>
              <Link to="/stopwatch">Stopwatch</Link>
            </div>
          </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Table />
          </Route>
          <Route  exact path="/robo">
            <Robo />
          </Route>
          <Route  exact path="/likes">
            <Likes />
          </Route>
          <Route  exact path="/account">
            <Account />
          </Route>
          <Route  exact path="/stopwatch">
            <Stopwatch />
          </Route>
         
        </Switch>
    </Router>
    </div>
  );
}

export default App;
