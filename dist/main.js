"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }

  _export("configure", configure);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=main.js.map
