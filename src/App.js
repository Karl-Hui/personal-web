import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <React.Fragment>
      <Router>
        <MainNavigation />
        <main>
          <div className="App">
            <h1>hello world</h1>
          </div>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
