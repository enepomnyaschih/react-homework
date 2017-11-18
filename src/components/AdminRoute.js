import PropTypes from 'prop-types';
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

function AdminRoute({loggedIn, component, ...props}) {
  const Component = component;
  return <Route render={() => loggedIn ? <Component {...props}/> : <Redirect to="/main"/>}/>;
}

export default AdminRoute;

AdminRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.any.isRequired
};
