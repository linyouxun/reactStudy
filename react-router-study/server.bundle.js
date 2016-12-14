/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0:1
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			var chunk = require(".//statics/js/" + ({"1":"app","2":"abort","3":"Repo","4":"NotFound"}[chunkId]||chunkId) + ".server." + {"1":"3a13a","2":"f113e","3":"9eb3e","4":"8cf92"}[chunkId] + ".chunk.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		}
/******/ 		callback.call(null, __webpack_require__);
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render
	// import some new stuff
	var express = __webpack_require__(15);
	// we'll use this to render our app to an html string

	var path = __webpack_require__(16);

	var app = express();

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, "./statics")));
	app.use(express.static(path.join(__dirname, "./statics")));

	// send all requests to index.html so browserHistory in React Router works
	app.get('/', function (req, res) {
	  // match the routes to the url
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // `RouterContext` is what the `Router` renders. `Router` keeps these
	    // `props` in its state as it listens to `browserHistory`. But on the
	    // server our app is stateless, so we need to use `match` to
	    // get these props before rendering.
	    var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));

	    // dump the HTML into a template, lots of ways to do this, but none are
	    // really influenced by React Router, so we're just using a little
	    // function, `renderPage`
	    res.send(renderPage(appHtml));
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <div id=app>' + appHtml + '</div>\n    <script src="/js/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// browserHistory  hashHistory
	// import {Router, Route, IndexRedirect, useRouterHistory, Redirect,IndexRoute} from 'react-router';
	// import {createHistory} from 'history';
	// const history = useRouterHistory(createHistory)({basename: ''});

	// import App from './App';
	// import Abort from './Abort';
	// import NotFound from './NotFound';
	// import Repo from './Repo';


	module.exports = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	          console.log('---');
	          cb(null, __webpack_require__(6).default);
	        });
	      } },
	    _react2.default.createElement(_reactRouter.IndexRoute, { getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	          console.log('---');
	          cb(null, __webpack_require__(12).default);
	        });
	      } }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/abort', getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	          cb(null, __webpack_require__(12).default);
	        });
	      } }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/repo/:id', getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(3, function (require) {
	          console.log('---');
	          cb(null, __webpack_require__(13).default);
	        });
	      } }),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', getComponent: function getComponent(nextState, cb) {
	        __webpack_require__.e/* nsure */(4, function (require) {
	          console.log('---');
	          cb(null, __webpack_require__(14).default);
	        });
	      } })
	  )
	);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);