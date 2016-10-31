'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);

          this.documents = [{
            url: 'dist/documents/one.pdf',
            draftUrl: 'dist/documents/one.pdf',
            pageNumber: 1,
            scale: 1,
            lastpage: 1
          }, {
            url: 'dist/documents/two.pdf',
            draftUrl: 'dist/documents/two.pdf',
            pageNumber: 1,
            scale: 1,
            lastpage: 1
          }];
        }

        App.prototype.loadUrl = function loadUrl(document) {
          document.url = document.draftUrl;
        };

        App.prototype.firstPage = function firstPage(document) {
          document.pageNumber = 1;
        };

        App.prototype.nextPage = function nextPage(document) {
          if (document.pageNumber >= document.lastpage) return;

          document.pageNumber += 1;
        };

        App.prototype.prevPage = function prevPage(document) {
          if (document.pageNumber <= 1) return;

          document.pageNumber -= 1;
        };

        App.prototype.lastPage = function lastPage(document) {
          document.pageNumber = document.lastpage;
        };

        App.prototype.goToPage = function goToPage(document, page) {
          if (page <= 0 || page > document.lastpage) return;

          document.pageNumber = page;
        };

        App.prototype.zoomIn = function zoomIn(document) {
          document.scale = Number(document.scale) + 0.1;
        };

        App.prototype.zoomOut = function zoomOut(document) {
          document.scale = Number(document.scale) - 0.1;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=app.js.map
