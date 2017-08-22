import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import Contacts from './components/Contacts';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/user/:name" component={User} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </Route>
  </Router>,
  document.getElementById('root'));
  /* Or another format：
const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/user/:name" component={User} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </Route>
);

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root'));
*/

registerServiceWorker();
