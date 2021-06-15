import { Fragment } from 'react';
import { Route } from 'react-router-dom';

const LayoutEmpty = (props) => {
  return (
    <Fragment>
      <Route {...props} />
    </Fragment>
  );
};

export default LayoutEmpty;
