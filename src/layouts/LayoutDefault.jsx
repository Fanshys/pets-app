import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';

const LayoutDefault = (props) => {
  return (
    <Fragment>
      <Header />
      <Route {...props} />
    </Fragment>
  );
};

export default LayoutDefault;
