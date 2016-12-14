import React from 'react';
import { render } from 'react-dom';
import {Router,Route,browserHistory,IndexRoute} from "react-router";
// browserHistory  hashHistory
// import {Router, Route, IndexRedirect, useRouterHistory, Redirect,IndexRoute} from 'react-router';
// import {createHistory} from 'history';
// const history = useRouterHistory(createHistory)({basename: ''});

// import App from './App';
// import Abort from './Abort';
// import NotFound from './NotFound';
// import Repo from './Repo';


module.exports = (
  <Router history={browserHistory} >
    <Route path="/" getComponent={
      (nextState, cb)=>{
        require.ensure([], (require) => {
          console.log('---');
          cb(null, require('./App').default)
        }, 'app')
      }
    } >
      <IndexRoute getComponent={
        (nextState, cb)=>{
          require.ensure([], (require) => {
            console.log('---');
            cb(null, require('./Abort').default)
          }, 'abort')
        }
      } />
      <Route path="/abort" getComponent={
        (nextState, cb)=>{
          require.ensure([], (require) => {
            cb(null, require('./Abort').default)
          }, 'abort')
        }
      } />
      <Route path="/repo/:id" getComponent={
        (nextState, cb)=>{
          require.ensure([], (require) => {
            console.log('---');
            cb(null, require('./Repo').default)
          }, 'Repo')
        }
      } />
      <Route path="*" getComponent={
        (nextState, cb)=>{
          require.ensure([], (require) => {
            console.log('---');
            cb(null, require('./NotFound').default)
          }, 'NotFound')
        }
      } />
    </Route>

  </Router>
)
