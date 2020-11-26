import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { Navigation } from './components/navigation';
import { PagesProvider } from './stores/pages';
import { Pages } from './components/pages';

function App() {
  debugger;
  return (
    <PagesProvider>
      <div>
        <Navigation />
        <Switch>
          <Route path={'/page/*'}>
            <Pages />
          </Route>
          <Route path="/blog">Blog</Route>
          <Route exact path="/">
            <Redirect to="/blog" />
          </Route>
          <div>404</div>
        </Switch>
      </div>
    </PagesProvider>
  );
}

export default App;
