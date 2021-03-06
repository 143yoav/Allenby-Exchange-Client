import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component }) => (
  <Route
    component={props =>
      sessionStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
