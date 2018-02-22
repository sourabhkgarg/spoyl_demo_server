'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('../containers/main');

var _main2 = _interopRequireDefault(_main);

var _homepage = require('../containers/Homepage/homepage');

var _homepage2 = _interopRequireDefault(_homepage);

var _searchPage = require('../containers/SearchPage/searchPage');

var _searchPage2 = _interopRequireDefault(_searchPage);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _main2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _homepage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/search', component: _searchPage2.default })
);