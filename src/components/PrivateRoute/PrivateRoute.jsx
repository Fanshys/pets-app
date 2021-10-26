import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component, auth, layout: Layout, ...rest }) => {
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

const mapStateToProps = (state) => {
  return {
    auth: state.user.isAuthorized,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
