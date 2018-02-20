'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.dispatchAction = dispatchAction;
exports.fetchListOfImages = fetchListOfImages;
exports.searchImages = searchImages;

var _actionConstants = require('./actionConstants');

var Type = _interopRequireWildcard(_actionConstants);

var _api = require('../api/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function dispatchAction(type, payload) {
  return function (dispatch) {
    dispatch({ type: type, payload: payload });
  };
}

function fetchListOfImages(imageList) {

  return function (dispatch) {

    dispatch(dispatchAction(Type.FETCH_IMAGES, _extends({}, imageList, { loader: true })));
    var queryParam = '&page=' + imageList.pageNo;
    return _api2.default.fetchListOfImages(queryParam).then(function (response) {

      var parsedResult = JSON.parse(response.text);
      var newObj = void 0;
      if (parsedResult.length > 0) {
        newObj = _extends({}, imageList, {
          data: [].concat(_toConsumableArray(imageList.data), _toConsumableArray(parsedResult)),
          pageNo: imageList.pageNo + 1,
          loader: false
        });
      } else {
        newObj = _extends({}, imageList, {
          pageNo: -1,
          loader: false
        });
      }
      dispatch(dispatchAction(Type.FETCH_IMAGES, newObj));
    }).catch(function (e) {
      var newObj = _extends({}, imageList, {
        pageNo: -1,
        loader: false
      });
      dispatch(dispatchAction(Type.FETCH_IMAGES, newObj));
    });
  };
}

function searchImages(imageList, query) {

  return function (dispatch) {
    dispatch(dispatchAction(Type.SEARCH_IMAGES, _extends({}, imageList, { loader: true })));
    var queryParam = '&page=' + imageList.pageNo + '&query=' + query;
    return _api2.default.searchImages(queryParam).then(function (response) {

      var parsedResult = JSON.parse(response.text);
      var newObj = void 0;
      if (parsedResult.results.length > 0) {
        newObj = _extends({}, imageList, {
          data: [].concat(_toConsumableArray(imageList.data), _toConsumableArray(parsedResult.results)),
          pageNo: imageList.pageNo + 1,
          loader: false
        });
      } else {
        newObj = _extends({}, imageList, {
          pageNo: -1,
          loader: false
        });
      }
      dispatch(dispatchAction(Type.SEARCH_IMAGES, newObj));
    }).catch(function (e) {

      var newObj = _extends({}, imageList, {
        pageNo: -1,
        loader: false
      });
      dispatch(dispatchAction(Type.SEARCH_IMAGES, newObj));
    });
  };
}