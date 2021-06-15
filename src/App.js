import './assets/styles/main.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LayoutDefault from './layouts/LayoutDefault';
import LayoutEmpty from './layouts/LayoutEmpty';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import AuthPage from './views/AuthPage/AuthPage.jsx';
import HomePage from './views/HomePage.jsx';
import UiPage from './views/UiPage.jsx';

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

          {/* Page with all ui components */}
          <LayoutDefault path="/ui" component={UiPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
