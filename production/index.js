'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('./styles/desktop.scss');

require('./styles/mobile.scss');

require('./styles/skeleton.scss');

require('babel-polyfill');

var _reactRouter = require('react-router');

var _route = require('./routes/route');

var _route2 = _interopRequireDefault(_route);

var _reactRedux = require('react-redux');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {

  var preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  var viewport = window.matchMedia("screen and (max-width: 768px)");

  var stateWithViewPort = Object.assign({}, preloadedState, {
    ViewPort: viewport.matches
  });

  var store = (0, _configureStore2.default)(stateWithViewPort);

  (0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, {
      history: _reactRouter.browserHistory,
      routes: _route2.default
    })
  ), document.getElementById('app'));
}