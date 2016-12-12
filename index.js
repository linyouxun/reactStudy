import React from 'react';
import { render } from 'react-dom';
// import {Router,Route,browserHistory,IndexRoute} from "react-router";
// browserHistory  hashHistory
import {Router, Route, IndexRedirect, useRouterHistory, Redirect,IndexRoute} from 'react-router';
import {createHistory} from 'history';
const history = useRouterHistory(createHistory)({basename: ''});

import routes from './modules/routes'

render(
  <Router routes={routes} history={history}/>,
  document.getElementById('app')
)
