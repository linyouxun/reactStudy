import React from 'react';
import { render } from 'react-dom';
import {Router,Route,browserHistory,IndexRoute} from "react-router";
// browserHistory  hashHistory
// import {Router, Route, IndexRedirect, useRouterHistory, Redirect,IndexRoute} from 'react-router';
// import {createHistory} from 'history';
// const history = useRouterHistory(createHistory)({basename: ''});

import App from './App';
import Abort from './Abort';
import NotFound from './NotFound';
import Repo from './Repo';


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Abort}/>
      <Route path="/abort" component={Abort}/>
      <Route path="/repo/:id" component={Repo}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
)
