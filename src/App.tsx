import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/home">Home</Route>
        <Route path="/blog">Blog</Route>
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
