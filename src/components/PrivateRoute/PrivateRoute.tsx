import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import LayoutDefault from 'layouts/LayoutDefault';
import LayoutEmpty from 'layouts/LayoutEmpty';
import { ComponentType } from 'react';
import { RouteProps } from 'react-router';

interface PrivateRoutePropsInterface extends RouteProps {
  component: ComponentType;
  layout: typeof LayoutDefault | typeof LayoutEmpty;
}

const PrivateRoute = ({
  component,
  layout: Layout,
  ...rest
}: PrivateRoutePropsInterface): JSX.Element => {
  const auth = useAppSelector((state) => state.user?.isAuthorized);

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
