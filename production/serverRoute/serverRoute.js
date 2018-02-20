'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHtmlWithStore = createHtmlWithStore;
exports.getmatchRoute = getmatchRoute;

var _api = require('../api/api');

var _api2 = _interopRequireDefault(_api);

var _redux = require('redux');

var _rootReducers = require('../reducers/rootReducers');

var _rootReducers2 = _interopRequireDefault(_rootReducers);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('ignore-styles');

var Express = require('express');
var React = require('react');


var renderToString = require('react-dom/server').renderToString;
var RouterContext = require('react-router').RouterContext;
var match = require('react-router').match;
var Provider = require('react-redux').Provider;
var routes = require('../routes/route');

var device = require('express-device');

var router = Express.Router();
router.use(device.capture());

router.get('/', function (req, res) {

  getmatchRoute(req.url, res, function (renderProps) {

    _api2.default.fetchListOfImages('&page=1').then(function (response) {

      var parsedResult = JSON.parse(response.text);
      var newObj = { data: parsedResult, pageNo: 2, loader: false };
      if (parsedResult.length < 1) {
        newObj = {
          data: parsedResult,
          pageNo: -1,
          loader: false
        };
      }

      var reduxState = { ImagesList: newObj };
      createHtmlWithStore(renderProps, res, req.device.type, reduxState);
    }).catch(function (e) {
      var newObj = { data: [], pageNo: -1, loader: false };
      var reduxState = { ImagesList: newObj };
      createHtmlWithStore(renderProps, res, req.device.type, reduxState);
    });
  });
});

router.get('/search', function (req, res) {

  getmatchRoute(req.url, res, function (renderProps) {

    var queryString = req.query.search;

    _api2.default.searchImages('&page=1&query=' + queryString).then(function (response) {
      var parsedResult = JSON.parse(response.text);
      var newObj = { data: parsedResult.results, pageNo: 2, loader: false };
      if (parsedResult.results.length < 1) {
        newObj = {
          data: parsedResult,
          pageNo: -1,
          loader: false
        };
      }

      var reduxState = { SearchImagesList: newObj };

      createHtmlWithStore(renderProps, res, req.device.type, reduxState);
    }).catch(function (e) {
      var newObj = { data: [], pageNo: -1, loader: false };
      var reduxState = { SearchImagesList: newObj };
      createHtmlWithStore(renderProps, res, req.device.type, reduxState);
    });
  });
});

module.exports = router;

function createHtmlWithStore(renderProps, res, devicetype, response) {

  var store = (0, _redux.createStore)(_rootReducers2.default, response);
  var html = void 0;
  if (renderProps) {

    html = renderToString(React.createElement(
      Provider,
      { store: store },
      React.createElement(RouterContext, renderProps)
    ));
  }

  var preloadedState = store.getState();
  res.send((0, _index.renderFullPage)(html, preloadedState));
}

function getmatchRoute(url, res, callBack) {
  match({ routes: routes, location: url }, function (err, redirectLocation, renderProps) {

    if (err) {
      return res.status(500).send(err.message);
    }
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    callBack(renderProps);
  });
}