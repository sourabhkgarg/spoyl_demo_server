"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = like;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function like(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "48px", height: "48px", viewBox: "0 0 48 48" }, props),
    _react2.default.createElement(
      "g",
      { transform: "translate(0, 0)" },
      _react2.default.createElement("path", { fill: "#EAD8C5", d: "M36.85254,47H12c-0.55225,0-1-0.44775-1-1V24c0-0.08887,0.01172-0.17725,0.03516-0.26318l6-22 C17.15381,1.30176,17.54883,1,18,1c3.85986,0,7,3.14014,7,7v11h14.00684c2.04492,0,3.98145,0.89014,5.31299,2.44238 c1.33105,1.55176,1.91602,3.60107,1.60498,5.62207l-2.15332,13.99951C43.2417,44.50391,40.33154,47,36.85254,47z" }),
      _react2.default.createElement("path", { fill: "#444444", d: "M11,23H2c-0.55225,0-1,0.44775-1,1v22c0,0.55225,0.44775,1,1,1h9V23z" })
    )
  );
}