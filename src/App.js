import React from 'react';
import Signup from './Components/Signup'
import Home from './Components/Home'
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path='/' component={Signup}></Route>
          <Route exact path='/home' component={Home}></Route>
          
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
