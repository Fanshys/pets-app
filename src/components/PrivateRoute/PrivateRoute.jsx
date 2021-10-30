import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component, layout: Layout, ...rest }) => {
  const auth = useSelector((state) => state.user?.isAuthorized);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Layout {...props} component={component} />
        ) : (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
