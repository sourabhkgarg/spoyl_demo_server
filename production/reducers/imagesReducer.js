"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;

var _actionConstants = require("../action/actionConstants");

function search() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: [], pageNo: 1, loader: false };
  var action = arguments[1];


  switch (action.type) {

    case _actionConstants.FETCH_IMAGES:
      {

        return action.payload;
      }

    default:
      return state;
  }
}