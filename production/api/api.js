'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseUrl = 'https://api.unsplash.com/';
var appId = '00dc3847d3148f85219b866436ac0494a3a9717374c39ecc77970ed82ee15320';

var api = function () {
  function api() {
    _classCallCheck(this, api);
  }

  _createClass(api, null, [{
    key: 'fetchListOfImages',
    value: function fetchListOfImages(queryParam) {
      return new Promise(function (resolve, reject) {
        _superagent2.default.get(baseUrl + 'photos?per_page=20&client_id=' + appId + queryParam).set('Accept', 'application/json').end(function (error, res) {
          error ? reject(error) : resolve(res);
        });
      });
    }
  }, {
    key: 'searchImages',
    value: function searchImages(queryParam) {
      return new Promise(function (resolve, reject) {
        _superagent2.default.get(baseUrl + 'search/photos?per_page=20&client_id=' + appId + queryParam).set('Accept', 'application/json').end(function (error, res) {
          error ? reject(error) : resolve(res);
        });
      });
    }
  }]);

  return api;
}();

exports.default = api;