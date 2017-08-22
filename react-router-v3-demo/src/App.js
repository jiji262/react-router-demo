import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, IndexLink } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>React Router Tutorial</h3>
          <ul className="nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/about" activeStyle={{ color: 'green' }}>About</Link></li>
            <li><Link to="/user/Xiaoming" activeStyle={{ color: 'red' }}>User</Link></li>
            <li><Link to="/contacts" activeClassName="active">Contacts</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
