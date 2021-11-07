import './assets/styles/main.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from 'firebase';

import LayoutDefault from './layouts/LayoutDefault';
import LayoutEmpty from './layouts/LayoutEmpty';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import AuthPage from './views/AuthPage/AuthPage';
import HomePage from './views/HomePage/HomePage';
import UiPage from './views/UiPage/UiPage';
import { userTypes } from 'store/types';
import { useDispatch } from 'react-redux';
import AlertBar from 'components/AlertBar/AlertBar';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: userTypes.LOGIN_SUCCESS, user });
      } else {
        dispatch({ type: userTypes.LOGOUT_SUCCESS });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <main className="main">
        <Switch>
          <LayoutEmpty path="/auth" component={AuthPage} />

          <PrivateRoute
            exact
            path="/"
            component={HomePage}
            layout={LayoutDefault}
          />

          <PrivateRoute
            path="/pets"
            component={HomePage}
            layout={LayoutDefault}
          />

          <PrivateRoute
            path="/favorites"
            component={HomePage}
            layout={LayoutDefault}
          />

          <PrivateRoute
            path="/blog"
            component={HomePage}
            layout={LayoutDefault}
          />

          {/* Page with all ui components */}
          <PrivateRoute path="/ui" component={UiPage} layout={LayoutDefault} />
        </Switch>
      </main>

      <AlertBar />
    </Router>
  );
}

export default App;
