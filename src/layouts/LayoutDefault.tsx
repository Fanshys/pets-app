import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import Header from '../components/Header/Header';

const LayoutDefault = (props: RouteProps) => {
  return (
    <Fragment>
      <Header />
      <Route {...props} />
    </Fragment>
  );
};

export default LayoutDefault;
