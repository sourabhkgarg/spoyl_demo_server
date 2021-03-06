"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = setCookie;
exports.getQueryStringValue = getQueryStringValue;
exports.getCookie = getCookie;
function setCookie(cname) {
  var cvalue = getQueryStringValue("activityId");
  var now = new Date();
  now.setMonth(now.getMonth() + 1);
  if (cvalue != "") document.cookie = cname + "=" + cvalue + "; " + "expires=" + now.toUTCString() + ";";
}

function getQueryStringValue(key) {
  return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}