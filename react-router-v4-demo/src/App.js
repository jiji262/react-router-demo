import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import Contacts from './components/Contacts';
import Users from './components/Users';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h3>React Router V4 Tutorial</h3>
              <ul className="nav">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={{ color: 'green' }}>About</NavLink></li>
                <li><NavLink to="/user/Xiaoming" activeStyle={{ color: 'red' }}>User</NavLink></li>
                <li><NavLink to="/contacts" activeClassName="active">Contacts</NavLink></li>
                <li><NavLink to="/users" >Users</NavLink></li>
              </ul>
            </div>


            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/user/:name" component={Users} />
              <Route path="/users" component={Users} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
