import React from 'react';

const User = ({match}) => (
  <div>UserName: {match.params.name}</div>
);

export default User;
