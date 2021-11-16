import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

const LayoutEmpty = (props: RouteProps) => {
  return (
    <Fragment>
      <Route {...props} />
    </Fragment>
  );
};

export default LayoutEmpty;
