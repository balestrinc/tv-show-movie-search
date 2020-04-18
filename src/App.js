import 'regenerator-runtime/runtime';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

import Home from './TvShowSearch/Home/Home';
import TvSearch from './TvShowSearch/TvSearch/TvSearch';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <TvSearch />
        </Route>
      </Router>
    </div>
  )
}

export default App;
