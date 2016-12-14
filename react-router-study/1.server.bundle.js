exports.ids = [1];
exports.modules = {

/***/ 15:
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

	exports.default = Repo;


	Repo.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

/***/ }

};;