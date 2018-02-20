'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./navbar.scss');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = { search: "" };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'onChange',
    value: function onChange(e) {
      var val = e.target.value;
      this.setState({ search: val });
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var search = this.state.search;

      if (search) {
        _reactRouter.browserHistory.push('/search?search=' + search);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var search = this.state.search;


      return _react2.default.createElement(
        'div',
        { className: 'container nav_abs' },
        _react2.default.createElement(
          'div',
          { className: 'container navbar ' },
          _react2.default.createElement(
            'div',
            { className: 'flex flex_center max-1200' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/', className: 'logo_width' },
              _react2.default.createElement('img', { src: 'https://www.spoyl.in/app/images/spoyl-logo.png', alt: '' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'navLinks' },
              _react2.default.createElement('input', { type: 'text', placeholder: 'Search Images', value: search, onChange: this.onChange }),
              _react2.default.createElement(
                'button',
                { onClick: this.onClick },
                'Search'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;