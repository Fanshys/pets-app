import './assets/styles/main.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LayoutDefault from './layouts/LayoutDefault';
import LayoutEmpty from './layouts/LayoutEmpty';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import AuthPage from './views/AuthPage/AuthPage.jsx';
import HomePage from './views/HomePage/HomePage';
import UiPage from './views/UiPage/UiPage.jsx';

function App() {
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
    </Router>
  );
}

export default App;
