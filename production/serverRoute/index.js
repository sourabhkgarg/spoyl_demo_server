'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFullPage = renderFullPage;
function renderFullPage(html, preloadedState) {

  return ' <!DOCTYPE html>\n  <html lang="en">\n\n    <head>\n    <link rel=\'stylesheet\'  href=\'/static/main.css\'  />\n   \n    </head>\n    <body>\n    \n    \n      <div id="app">' + html + '</div>\n      <script>\n        window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n      </script>\n\n      <script type="text/javascript" src="/static/vendor.js" ></script>\n      <script type="text/javascript" src="/static/main.js" ></script>\n    </body>\n  </html>\n  ';
}