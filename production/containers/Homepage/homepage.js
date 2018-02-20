'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./homepage.scss');

var _actions = require('../../action/actions');

var _infiniteScroll = require('../../components/InfiniteScroll/infiniteScroll');

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

var _imageListContainer = require('../../components/ImageListContainer/imageListContainer');

var _imageListContainer2 = _interopRequireDefault(_imageListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.fetchImages = _this.fetchImages.bind(_this);
    return _this;
  }

  _createClass(Main, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchImages();
    }
  }, {
    key: 'fetchImages',
    value: function fetchImages() {
      var _props = this.props,
          dispatch = _props.dispatch,
          ImagesList = _props.ImagesList;

      if (ImagesList.pageNo !== -1 && !ImagesList.loader) {
        dispatch((0, _actions.fetchListOfImages)(ImagesList));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var ImagesList = this.props.ImagesList;
      var data = ImagesList.data,
          loader = ImagesList.loader,
          pageNo = ImagesList.pageNo;


      return _react2.default.createElement(
        'div',
        { className: 'container' },
        pageNo === 1 && loader ? _react2.default.createElement(
          'div',
          { className: 'full_window_loader' },
          _react2.default.createElement('img', { src: 'https://www.spoyl.in/app/images/spoyl-logo.png', alt: '' })
        ) : _react2.default.createElement(
          'div',
          { className: 'max-1200 pad_top ' },
          _react2.default.createElement(
            'h3',
            { className: 'head_h3' },
            'Popular Images'
          ),
          _react2.default.createElement(
            _infiniteScroll2.default,
            { offset: 100, scrollhandler: this.fetchImages },
            _react2.default.createElement(_imageListContainer2.default, { ImagesList: ImagesList })
          )
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    ImagesList: state.ImagesList

  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Main);