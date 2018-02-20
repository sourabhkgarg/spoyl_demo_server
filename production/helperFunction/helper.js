"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPaddingBottom = findPaddingBottom;
function findPaddingBottom(width, height, ratio_wdith) {

  return height * ratio_wdith / width;
};