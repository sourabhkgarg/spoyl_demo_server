'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('./footer.scss');

var _fb = require('../../images/Icons/fb');

var _fb2 = _interopRequireDefault(_fb);

var _twitter = require('../../images/Icons/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _insta = require('../../images/Icons/insta');

var _insta2 = _interopRequireDefault(_insta);

var _gplus = require('../../images/Icons/gplus');

var _gplus2 = _interopRequireDefault(_gplus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'container footer ' },
        _react2.default.createElement(
          'div',
          { className: 'flex max-1200 justify_between' },
          _react2.default.createElement(
            'ul',
            { className: 'footer_ul width_25' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Company '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' About Us '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Contact Us '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Privacy Policy '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Terms & Conditions '
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'footer_ul width_25' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Company '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' About Us '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Contact Us '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Privacy Policy '
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                null,
                ' Terms & Conditions '
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'width_25' },
            _react2.default.createElement(
              'ul',
              { className: 'footer_ul ' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  null,
                  ' Get in touch '
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  null,
                  ' About Us '
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  null,
                  ' Contact Us '
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'social_div width_25' },
            _react2.default.createElement(
              'p',
              null,
              'Follow us on'
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex social_icons' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_fb2.default, null)
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_twitter2.default, null)
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_insta2.default, null)
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_gplus2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;