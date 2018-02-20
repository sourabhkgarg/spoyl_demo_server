'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _viewport = require('./viewport');

var _viewport2 = _interopRequireDefault(_viewport);

var _imagesReducer = require('./imagesReducer');

var _imagesReducer2 = _interopRequireDefault(_imagesReducer);

var _searchImages = require('./searchImages');

var _searchImages2 = _interopRequireDefault(_searchImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducers = (0, _redux.combineReducers)({

  ViewPort: _viewport2.default, Settings: _settings2.default, ImagesList: _imagesReducer2.default, SearchImagesList: _searchImages2.default

});

exports.default = rootReducers;