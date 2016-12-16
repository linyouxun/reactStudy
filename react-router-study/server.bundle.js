/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

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
	// import { match, RouterContext } from 'react-router';
	// import some new stuff
	var express = __webpack_require__(17);
	// we'll use this to render our app to an html string

	var path = __webpack_require__(18);

	var app = express();

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, "./statics/chunkJs")));
	app.use(express.static(path.join(__dirname, "./statics")));

	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
	  // match the routes to the url
	  // match({ routes: routes, location: req.url }, (err, redirect, props) => {
	  //   // `RouterContext` is what the `Router` renders. `Router` keeps these
	  //   // `props` in its state as it listens to `browserHistory`. But on the
	  //   // server our app is stateless, so we need to use `match` to
	  //   // get these props before rendering.
	  //   const appHtml = renderToString(<RouterContext {...props}/>)
	  //
	  //   // dump the HTML into a template, lots of ways to do this, but none are
	  //   // really influenced by React Router, so we're just using a little
	  //   // function, `renderPage`
	  //   res.send(renderPage(appHtml))
	  // })
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      res.status(200).send(renderPage((0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, renderProps))));
	    } else {
	      res.status(404).send('Not found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public "storage">\n    <html>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui, maximum-scale=1.0, minimum-scale=1.0">\n    <meta name="apple-mobile-web-app-capable" content="yes">\n    <meta name="apple-mobile-web-app-status-bar-style" content="black">\n    <meta name="format-detection" content="telephone=no">\n    <title>My First React Router App</title>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 9090;
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

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	var _Abort = __webpack_require__(14);

	var _Abort2 = _interopRequireDefault(_Abort);

	var _NotFound = __webpack_require__(15);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Repo = __webpack_require__(16);

	var _Repo2 = _interopRequireDefault(_Repo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// browserHistory  hashHistory
	// import {Router, Route, IndexRedirect, useRouterHistory, Redirect,IndexRoute} from 'react-router';
	// import {createHistory} from 'history';
	// const history = useRouterHistory(createHistory)({basename: ''});


	// const routes = [
	//   {
	//     path:"/",
	//     getComponents(location, callback) {
	//       require.ensure([], function (require) {
	//         callback(null, require('./App'))
	//       })
	//     },
	//     indexRoute:{
	//       getComponents(location, callback) {
	//         require.ensure([], function (require) {
	//           callback(null, require('./Abort').default)
	//         })
	//       },
	//     },
	//     childRoutes:[
	//       {
	//         path:"abort",
	//         getComponents(location, callback) {
	//           require.ensure([], function (require) {
	//             callback(null, require('./Abort').default)
	//           })
	//         },
	//       },{
	//         path:"repo/:id",
	//         getComponents(location, callback) {
	//           require.ensure([], function (require) {
	//             callback(null, require('./Repo'))
	//           })
	//         }
	//       }
	//     ]
	//   },
	//   {
	//     path:"*",
	//     getComponents(location, callback) {
	//       require.ensure([], function (require) {
	//         callback(null, require('./NotFound'))
	//       })
	//     }
	//   }
	// ]
	//
	// module.exports = routes;

	function autoCertification(nextState, replaceState) {
	  console.log('----');
	  console.log(nextState.location.pathname);
	}
	module.exports = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Abort2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/abort', component: _Abort2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/repo/:id', getComponent:
	      // (location, cb) => {
	      //   cb(null, require('./Repo'))
	      // }
	      function getComponent(nextState, cb) {
	        !/* require.ensure */(function (require) {
	          cb(null, __webpack_require__(16));
	        }(__webpack_require__));
	      } })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
	);

	// module.exports = (
	//   <Router history={browserHistory}>
	//   <Route path="/" component={App} onEnter={autoCertification}>
	//     <IndexRoute component={Abort} />
	//     <Route path="/abort" component={Abort} onEnter={autoCertification}/>
	//     <Route path="/repo" component={Repo} onEnter={autoCertification}/>
	//   </Route>
	//     <Route path="*" component={NotFound} onEnter={autoCertification}/>
	//   </Router>
	// )

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(7);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _LazyImg = __webpack_require__(8);

	var _LazyImg2 = _interopRequireDefault(_LazyImg);

	var _SliderImgs = __webpack_require__(9);

	var _SliderImgs2 = _interopRequireDefault(_SliderImgs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// export default
	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.goAbort = _this._goAbort.bind(_this);
	    return _this;
	  }

	  _createClass(App, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      console.log('--componentWillMount--');
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      __webpack_require__(10);
	    }
	  }, {
	    key: "_goAbort",
	    value: function _goAbort() {
	      this.context.router.push("/abort");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var imgs = ["http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg", "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg", "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg"];
	      var imgs2 = [];
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: "/abort2", activeStyle: { color: "gray" } },
	          " Abort2"
	        ),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.goAbort },
	          "hello"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "div", "data-title": "NEW", activeStyle: { color: "red" } },
	          "Hello World2"
	        ),
	        _react2.default.createElement(
	          "ul",
	          null,
	          _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: "/abort", activeStyle: { color: "gray" } },
	              " Abort"
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: "/repo/2", activeStyle: { color: "gray" } },
	              " repo"
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: "/abort2", activeStyle: { color: "gray" } },
	              " Abort2"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "ul",
	          null,
	          _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: "/abort", activeStyle: { color: "red" } },
	              " ",
	              _react2.default.createElement(
	                "div",
	                null,
	                "ddddd"
	              ),
	              "Abort"
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: "/repo/1", activeStyle: { color: "red" } },
	              " repo"
	            )
	          ),
	          _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	              _NavLink2.default,
	              { to: "/abort2", activeStyle: { color: "red" } },
	              " Abort2"
	            )
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	App.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	module.exports = App;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavLink = function (_Component) {
	  _inherits(NavLink, _Component);

	  function NavLink() {
	    _classCallCheck(this, NavLink);

	    return _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).apply(this, arguments));
	  }

	  _createClass(NavLink, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeStyle: { color: "red" } }));
	    }
	  }]);

	  return NavLink;
	}(_react.Component);

	exports.default = NavLink;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LazyImg = function (_Component) {
	  _inherits(LazyImg, _Component);

	  function LazyImg(props) {
	    _classCallCheck(this, LazyImg);

	    var _this = _possibleConstructorReturn(this, (LazyImg.__proto__ || Object.getPrototypeOf(LazyImg)).call(this, props));

	    _this.static = {
	      monitorEvent: ["scroll", "resize", "touchmove"]
	    };
	    return _this;
	  }

	  _createClass(LazyImg, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      var el = this.refs.lazyImg;
	      this.removeEvent = this._removeEvent.bind(this);
	      this.updateViewport = this._updateViewport.bind(this, el);
	      for (var i = 0, len = this.static.monitorEvent.length; i < len; i++) {
	        window.addEventListener(this.static.monitorEvent[i], this.updateViewport, true);
	      }
	      setTimeout(function () {
	        _this2.updateViewport(el);
	      }, 0);
	    }
	  }, {
	    key: "_updateViewport",
	    value: function _updateViewport(el) {
	      if (this.isVisiable(el)) {
	        this.loadImg(el);
	      } else {}
	    }
	  }, {
	    key: "loadImg",
	    value: function loadImg(el) {
	      var _this3 = this;

	      var originImg = this.props.originImg;

	      var img = new Image();
	      img.src = originImg;
	      img.addEventListener('load', function () {
	        el.src = img.src;
	        _this3.removeEvent();
	      }, true);
	      img.addEventListener('error', function () {
	        console.log('load failed');
	      }, true);
	    }
	  }, {
	    key: "isVisiable",
	    value: function isVisiable(el) {
	      var bcr = el.getBoundingClientRect(); //取得元素在可视区的位置
	      var _props = this.props,
	          left = _props.left,
	          top = _props.top,
	          right = _props.right,
	          bottom = _props.bottom;

	      var mw = el.offsetWidth; //元素自身宽度
	      var mh = el.offsetHeight; //元素自身的高度
	      var w = window.innerWidth; //视窗的宽度
	      var h = window.innerHeight; //视窗的高度
	      var boolX = !(bcr.right - left <= 0 && bcr.left + mw - left <= 0) && !(bcr.left + right >= w && bcr.right + right >= mw + w); //上下符合条件
	      var boolY = !(bcr.bottom - top <= 0 && bcr.top + mh - top <= 0) && !(bcr.top + bottom >= h && bcr.bottom + bottom >= mh + h); //上下符合条件
	      if (el.width != 0 && el.height != 0 && boolX && boolY) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: "_removeEvent",
	    value: function _removeEvent() {
	      for (var i = 0, len = this.static.monitorEvent.length; i < len; i++) {
	        window.removeEventListener(this.static.monitorEvent[i], this.updateViewport, true);
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      for (var i = 0, len = this.static.monitorEvent.length; i < len; i++) {
	        window.removeEventListener(this.static.monitorEvent[i], this.updateViewport, true);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props2 = this.props,
	          defaultClass = _props2.defaultClass,
	          defaultImg = _props2.defaultImg;

	      return _react2.default.createElement("img", { ref: "lazyImg", className: defaultClass, src: defaultImg });
	    }
	  }]);

	  return LazyImg;
	}(_react.Component);

	exports.default = LazyImg;


	LazyImg.defaultProps = {
	  top: 0, //元素在顶部伸出的距离才加载
	  right: 0, //元素在右边伸出的距离才加载
	  bottom: 0, //元素在底部伸出的距离才加载
	  left: 0, //元素在左边伸出的距离才加载
	  defaultClass: "",
	  defaultImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAen63NgAAAAASUVORK5CYII=",
	  originImg: ""
	};

	LazyImg.propTypes = {
	  defaultClass: _react.PropTypes.string,
	  defaultImg: _react.PropTypes.string,
	  originImg: _react.PropTypes.string,
	  top: _react.PropTypes.number,
	  right: _react.PropTypes.number,
	  bottom: _react.PropTypes.number,
	  left: _react.PropTypes.number
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SliderImgs = function (_Component) {
	  _inherits(SliderImgs, _Component);

	  function SliderImgs(props) {
	    _classCallCheck(this, SliderImgs);

	    var _this = _possibleConstructorReturn(this, (SliderImgs.__proto__ || Object.getPrototypeOf(SliderImgs)).call(this, props));

	    _this.state = {
	      curIndex: 0
	    };
	    _this.static = {
	      count: 0,
	      clearTimeout: "",
	      touchPos: {
	        pageX: 0,
	        pageY: 0,
	        moveX: 0
	      }
	    };
	    return _this;
	  }

	  _createClass(SliderImgs, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      // require('./App.scss');
	      var initClass = this.props.initClass;

	      this.static.count = document.querySelectorAll("." + initClass)[0].firstChild.children.length;
	      this.slideStartEvent = this._slideStartEvent.bind(this, document.querySelectorAll("." + initClass)[0]);
	      this.slideMoveEvent = this._slideMoveEvent.bind(this, document.querySelectorAll("." + initClass)[0]);
	      this.slideEndEvent = this._slideEndEvent.bind(this, document.querySelectorAll("." + initClass)[0]);

	      document.querySelectorAll("." + initClass)[0].addEventListener("touchstart", this.slideStartEvent, true);
	      document.querySelectorAll("." + initClass)[0].addEventListener("touchmove", this.slideMoveEvent, true);
	      document.querySelectorAll("." + initClass)[0].addEventListener("touchend", this.slideEndEvent, true);
	    }
	  }, {
	    key: "_slideStartEvent",
	    value: function _slideStartEvent(target, e) {
	      e.stopPropagation();
	      target.firstChild.style.transitionDuration = "";
	      this.static.touchPos.pageX = e.targetTouches[0].pageX;
	      this.static.touchPos.pageY = e.targetTouches[0].pageY;
	      this.static.touchPos.moveX = this.getTranslate(target.firstChild);
	    }
	  }, {
	    key: "getTranslate",
	    value: function getTranslate(el) {
	      var /*matrix,*/curTransform = void 0,
	          curStyle = void 0,
	          transformMatrix = void 0;
	      curStyle = window.getComputedStyle(el, null);
	      if (window.WebKitCSSMatrix) {
	        transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
	        curTransform = transformMatrix.m41;
	      } else {
	        alert("你的手机暂时不支持滑动查看图片");
	        this.removeEvent();
	      }
	      return curTransform || 0;
	    }

	    //事件

	  }, {
	    key: "_slideMoveEvent",
	    value: function _slideMoveEvent(target, e) {
	      e.stopPropagation();
	      var x = e.targetTouches[0].pageX - this.static.touchPos.pageX + this.static.touchPos.moveX;
	      if (target.firstChild.style.WebkitTransform) {
	        target.firstChild.style.WebkitTransitionDuration = "0ms";
	        target.firstChild.style.WebkitTransform = "translate3d(" + x + "px, 0px, 0px)";
	      } else {
	        target.firstChild.style.WebkitTransitionDuration = "0ms";
	        target.firstChild.style.WebkitTransform = "translate3d(0px, 0px, 0px)";
	        if (target.firstChild.style.transform) {
	          target.firstChild.style.transitionDuration = "0ms";
	          target.firstChild.style.transform = "translate3d(" + x + "px, 0px, 0px)";
	        } else {
	          target.firstChild.style.transitionDuration = "0ms";
	          target.firstChild.style.transform = "translate3d(0px, 0px, 0px)";
	        }
	      }
	    }
	    //事件

	  }, {
	    key: "_slideEndEvent",
	    value: function _slideEndEvent(target, e) {
	      e.stopPropagation();
	      target.scrollLeft = 0;
	      this.static.touchPos = { pageX: 0, pageY: 0 };
	      var width = target.offsetWidth;
	      var moveEndY = this.getTranslate(target.firstChild);
	      var curCount = this.posLeft(width, moveEndY);
	      this.setState({
	        curIndex: Math.abs(curCount)
	      });
	      setTimeout(function () {
	        target.firstChild.style.WebkitTransitionDuration = "";
	        target.firstChild.style.WebkitTransform = "translate3d(" + curCount * width + "px, 0px, 0px)";
	      }, 0);
	    }
	  }, {
	    key: "posLeft",
	    value: function posLeft(width, left) {
	      var curCount = Math.floor(left / width + 0.5);
	      if (curCount > 0) {
	        curCount = 0;
	      } else if (curCount + this.static.count < 1) {
	        curCount = 1 - this.static.count;
	      }
	      return curCount;
	    }
	  }, {
	    key: "removeEvent",
	    value: function removeEvent() {
	      var initClass = this.props.initClass;

	      document.querySelectorAll("." + initClass)[0].removeEventListener("touchstart", this.slideStartEvent, true);
	      document.querySelectorAll("." + initClass)[0].removeEventListener("touchmove", this.slideMoveEvent, true);
	      document.querySelectorAll("." + initClass)[0].removeEventListener("touchend", this.slideEndEvent, true);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.removeEvent();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          imgs = _props.imgs,
	          initClass = _props.initClass;

	      return _react2.default.createElement(
	        "div",
	        { className: "slider-container " + initClass },
	        _react2.default.createElement(
	          "div",
	          { className: "slider" },
	          imgs.map(function (item, index) {
	            return _react2.default.createElement(
	              "div",
	              { key: index },
	              _react2.default.createElement("img", { src: item })
	            );
	          })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "slider-pagination" },
	          imgs.map(function (item, index) {
	            return _react2.default.createElement("span", { key: index, className: _this2.state.curIndex == index ? "active" : "" });
	          })
	        )
	      );
	    }
	  }]);

	  return SliderImgs;
	}(_react.Component);

	exports.default = SliderImgs;


	SliderImgs.defaultProps = {
	  initClass: "img-slider",
	  imgs: []
	};

	SliderImgs.propTypes = {
	  initClass: _react.PropTypes.string,
	  imgs: _react.PropTypes.array
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.26.1@css-loader/index.js!./../node_modules/.4.1.0@sass-loader/index.js?sourceMap!./App.scss", function() {
				var newContent = require("!!./../node_modules/.0.26.1@css-loader/index.js!./../node_modules/.4.1.0@sass-loader/index.js?sourceMap!./App.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  margin: auto 0; }\n  * .slider-container {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    background-color: #eee; }\n    * .slider-container .slider {\n      display: -webkit-box;\n      transition-duration: 300ms;\n      -webkit-transition-duration: 300ms; }\n      * .slider-container .slider div {\n        width: 100%; }\n        * .slider-container .slider div img {\n          width: 100%; }\n    * .slider-container .slider-pagination {\n      height: 20px;\n      width: 100%;\n      text-align: center;\n      bottom: 5px;\n      position: absolute; }\n      * .slider-container .slider-pagination span {\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        background-color: rgba(0, 0, 0, 0.3);\n        margin: 0 5px;\n        border-radius: 5px; }\n        * .slider-container .slider-pagination span.active {\n          background-color: red; }\n  * .lazy-img {\n    width: 200px;\n    height: 200px; }\n  * .div {\n    position: relative;\n    height: 200px;\n    width: 200px;\n    background-color: gray; }\n    * .div:before {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(45deg, transparent calc(90% - 2rem), blue 0, blue 90%, transparent 0); }\n    * .div:after {\n      content: attr(data-title) \" \";\n      position: absolute;\n      top: 10%;\n      left: 35.86%;\n      width: 100%;\n      height: 2rem;\n      line-height: 2rem;\n      font-size: 1.5rem;\n      text-align: center;\n      color: #FFF;\n      transform: rotate(9deg);\n      -webkit-transform: rotate(45deg); }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Abort = function (_Component) {
	  _inherits(Abort, _Component);

	  function Abort(props) {
	    _classCallCheck(this, Abort);

	    var _this = _possibleConstructorReturn(this, (Abort.__proto__ || Object.getPrototypeOf(Abort)).call(this, props));

	    console.log('---server----abort-------');
	    return _this;
	  }

	  _createClass(Abort, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        "Abort"
	      );
	    }
	  }]);

	  return Abort;
	}(_react.Component);

	exports.default = Abort;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotFound = function (_Component) {
	  _inherits(NotFound, _Component);

	  function NotFound() {
	    _classCallCheck(this, NotFound);

	    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
	  }

	  _createClass(NotFound, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        "NotFound",
	        _react2.default.createElement("hr", null),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: "/" },
	          "go back"
	        )
	      );
	    }
	  }]);

	  return NotFound;
	}(_react.Component);

	module.exports = NotFound;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Repo = function (_Component) {
	  _inherits(Repo, _Component);

	  function Repo(props) {
	    _classCallCheck(this, Repo);

	    var _this = _possibleConstructorReturn(this, (Repo.__proto__ || Object.getPrototypeOf(Repo)).call(this, props));

	    _this.goBack = _this._goBack.bind(_this);
	    return _this;
	  }

	  _createClass(Repo, [{
	    key: "_goBack",
	    value: function _goBack() {
	      this.context.router.push("/");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var id = this.props.params.id;

	      console.log('---------Repo-------');
	      return _react2.default.createElement(
	        "div",
	        null,
	        "repo:",
	        id,
	        _react2.default.createElement(
	          "button",
	          { onClick: this.goBack },
	          "go back"
	        )
	      );
	    }
	  }]);

	  return Repo;
	}(_react.Component);

	Repo.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	module.exports = Repo;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);