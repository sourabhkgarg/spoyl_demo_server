"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocaleStorage = setLocaleStorage;
exports.getLocaleStorage = getLocaleStorage;
function setLocaleStorage(name, data) {
  if (window.localStorage) {
    sessionStorage.setItem(name, JSON.stringify(data));
  }
}

function getLocaleStorage(name) {
  if (window.localStorage) {
    return JSON.parse(sessionStorage.getItem(name));
  }
}