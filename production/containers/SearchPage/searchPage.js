'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../action/actions');

var _cookies = require('../../action/cookies');

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

    _this.state = { searchQuery: "" };
    _this.fetchImages = _this.fetchImages.bind(_this);
    return _this;
  }

  _createClass(Main, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchImages();
      this.setState({ searchQuery: (0, _cookies.getQueryStringValue)('search') });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var queryString = (0, _cookies.getQueryStringValue)('search');
      if (this.state.searchQuery !== queryString) {
        this.fetchImages();
      }
    }
  }, {
    key: 'fetchImages',
    value: function fetchImages() {
      var queryString = (0, _cookies.getQueryStringValue)('search');
      var _props = this.props,
          dispatch = _props.dispatch,
          SearchImagesList = _props.SearchImagesList;

      var searchLocalObj = _extends({}, SearchImagesList);

      if (this.state.searchQuery !== queryString) {
        searchLocalObj.data = [];
        searchLocalObj.pageNo = 1;
        this.setState({ searchQuery: queryString });
      }

      if (searchLocalObj.pageNo !== -1 && !searchLocalObj.loader) {
        dispatch((0, _actions.searchImages)(searchLocalObj, queryString));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var SearchImagesList = this.props.SearchImagesList;
      var data = SearchImagesList.data,
          loader = SearchImagesList.loader,
          pageNo = SearchImagesList.pageNo;


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
            'Found Images'
          ),
          _react2.default.createElement(
            _infiniteScroll2.default,
            { offset: 100, scrollhandler: this.fetchImages },
            _react2.default.createElement(_imageListContainer2.default, { ImagesList: SearchImagesList })
          )
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    SearchImagesList: state.SearchImagesList

  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Main);