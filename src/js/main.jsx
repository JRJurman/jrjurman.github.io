// main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import Page from './containers/page.jsx';
import Home from './containers/home.jsx';
import About from './containers/home.jsx';
import Projects from './containers/home.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" components={Page}>
      <IndexRoute components={Home} />
      <Route path="about" components={Home} />
      <Route path="projects" components={Home} />
    </Route>
  </Router>
, document.getElementById("main"));
