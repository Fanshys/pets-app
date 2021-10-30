import { useSelector } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';

import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';
import Auth from '../../components/Auth/Auth';
import authBackground from '../../assets/images/auth-background.svg';
import loginBackground from '../../assets/images/login-background.svg';
import './AuthPage.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const AuthPage = ({ location }) => {
  const [background, setBackground] = useState(authBackground);

  useEffect(() => {
    if (
      location.pathname === '/auth/login' ||
      location.pathname === '/auth/signup'
    ) {
      setBackground(loginBackground);
    }
  }, [location]);

  const auth = useSelector((state) => state.user.isAuthorized);

  if (auth) {
    return <Redirect to="/" />;
  }

  return (
    <div
      className="page page--no-padding auth-page"
      style={{ backgroundImage: `url(${background}` }}
    >
      <Switch>
        <Route exact path="/auth">
          <Auth />
        </Route>

        <Route path="/auth/login">
          <Login />
        </Route>

        <Route path="/auth/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default AuthPage;
