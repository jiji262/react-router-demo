import React from 'react';
import User from './User';

import {
  Route,
  Link
} from 'react-router-dom';

const Users = ({ match }) => (
  <div>
    <h3>Users Page</h3>
    <ul className="users-list">
      <li>
        <Link to={`${match.url}/Xiaoming`}>
          Xiaoming
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Lilei`}>
          Lilei
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Hanmeimei`}>
          Hanmeimei
        </Link>
      </li>
    </ul>

    <hr />
    <div>
      <Route path={`${match.url}/:name`} component={User}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a name.</h3>
      )}/>
    </div>
  </div>
);

export default Users;
