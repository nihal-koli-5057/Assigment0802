import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.user);

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated !== null? (
            <Component {...props} />
          ) : (
            <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
