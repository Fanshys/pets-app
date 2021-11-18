import './assets/styles/main.scss';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { userTypes } from 'store/types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import firebase from 'firebase';

// layouts
import LayoutDefault from 'components/_layouts/LayoutDefault';
import LayoutEmpty from 'components/_layouts/LayoutEmpty';

// pages
import AuthPage from 'components/_pages/AuthPage/AuthPage';
import HomePage from 'components/_pages/HomePage/HomePage';
import UiPage from 'components/_pages/UiPage/UiPage';
import PetsPageContainer from 'components/_pages/PetsPage/PetsPageContainer';

// components
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import AlertBarContainer from 'components/AlertBar/AlertBarContainer';

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
            component={PetsPageContainer}
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

      <AlertBarContainer />
    </Router>
  );
}

export default App;
