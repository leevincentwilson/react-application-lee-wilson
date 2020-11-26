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
          <Pages />
          <Route path="/blog">Blog</Route>
          <Redirect to="/blog" />
        </Switch>
      </div>
    </PagesProvider>
  );
}

export default App;
