'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _rootReducers = require('../reducers/rootReducers');

var _rootReducers2 = _interopRequireDefault(_rootReducers);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  return (0, _redux.createStore)(_rootReducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}