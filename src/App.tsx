import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { Navigation } from './components/navigation';
import { PagesProvider } from './stores/pages';
import { Pages } from './components/pages';
import { BlogProvider } from './stores/blog';
import { Blog } from './components/blog';

function App() {
  return (
    <PagesProvider>
      <BlogProvider>
        <div>
          <Navigation />
          <div style={{ marginTop: 64 }}>
            <Switch>
              <Route path={'/page/*'}>
                <Pages />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route exact path="/">
                <Redirect to="/blog" />
              </Route>
              <div>404</div>
            </Switch>
          </div>
        </div>
      </BlogProvider>
    </PagesProvider>
  );
}

export default App;
