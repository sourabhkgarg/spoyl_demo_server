'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _image = require('../../components/Image/image');

var _image2 = _interopRequireDefault(_image);

var _helper = require('../../helperFunction/helper');

var _like = require('./like');

var _like2 = _interopRequireDefault(_like);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageListContainer = function (_React$Component) {
  _inherits(ImageListContainer, _React$Component);

  function ImageListContainer(props) {
    _classCallCheck(this, ImageListContainer);

    return _possibleConstructorReturn(this, (ImageListContainer.__proto__ || Object.getPrototypeOf(ImageListContainer)).call(this, props));
  }

  _createClass(ImageListContainer, [{
    key: 'render',
    value: function render() {
      var ImagesList = this.props.ImagesList;
      var data = ImagesList.data,
          loader = ImagesList.loader,
          pageNo = ImagesList.pageNo;


      var leftBlocks = [];
      var middleBlocks = [];
      var rightBlocks = [];

      if (data.length > 0) {

        var type = 0;
        data.forEach(function (item) {

          if (item.urls && item.urls.thumb) {

            var paddBottom = {
              paddingBottom: (0, _helper.findPaddingBottom)(item.width, item.height, 100) + "%"
            };

            var el = _react2.default.createElement(
              'div',
              { className: 'block', key: item.id },
              _react2.default.createElement(_image2.default, { src: item.urls.thumb, style: paddBottom }),
              _react2.default.createElement(
                'div',
                { className: 'flex flex_center' },
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  item.description ? item.description : "A fallback description"
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'total_likes' },
                  _react2.default.createElement(_like2.default, null),
                  item.likes
                )
              )
            );

            if (type === 0) {
              leftBlocks.push(el);
              type = 1;
            } else if (type === 1) {
              middleBlocks.push(el);
              type = 2;
            } else if (type === 2) {
              rightBlocks.push(el);
              type = 0;
            }
          }
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'img_container' },
        _react2.default.createElement(
          'div',
          { className: 'image_inner_container' },
          leftBlocks
        ),
        _react2.default.createElement(
          'div',
          { className: 'image_inner_container' },
          middleBlocks
        ),
        _react2.default.createElement(
          'div',
          { className: 'image_inner_container' },
          rightBlocks
        )
      );
    }
  }]);

  return ImageListContainer;
}(_react2.default.Component);

exports.default = ImageListContainer;