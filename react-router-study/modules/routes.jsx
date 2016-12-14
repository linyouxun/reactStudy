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
    <Route path="/repo" component={Repo}/>
  </Route>
    <Route path="*" component={NotFound}/>
  </Router>
)

// module.exports = (
//   <Router history={browserHistory}>
//   <Route path="/" getComponent={
//           (nextState, cb)=>{
//             require.ensure([], (require) => {
//               console.log('---');
//               cb(null, require('./App'))
//             }, 'app')
//           }
//         } >
//     <IndexRoute getComponent={
//             (nextState, cb)=>{
//               require.ensure([], (require) => {
//                 console.log('---');
//                 cb(null, require('./Abort'))
//               }, 'abort')
//             }
//           } />
//     <Route path="/abort" getComponent={
//             (nextState, cb)=>{
//               require.ensure([], (require) => {
//                 console.log('---');
//                 cb(null, require('./Abort'))
//               }, 'abort')
//             }
//           } />
//     <Route path="/repo" getComponent={
//             (nextState, cb)=>{
//               require.ensure([], (require) => {
//                 console.log('---');
//                 cb(null, require('./Repo'))
//               }, 'repo')
//             }
//           } />
//   </Route>
//     <Route path="*" getComponent={
//             (nextState, cb)=>{
//               require.ensure([], (require) => {
//                 console.log('---');
//                 cb(null, require('./NotFound'))
//               }, 'notFound')
//             }
//           } />
//   </Router>
// )
