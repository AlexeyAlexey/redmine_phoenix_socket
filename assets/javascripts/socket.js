(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports", "phoenix"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("phoenix"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.phoenix);
    global.socket = mod.exports;
  }
})(this, function (module, exports, _phoenix) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var socket = new _phoenix.Socket("ws://192.168.60.60:4000/socket", {
    params: { token: window.userToken },
    logger: function logger(kind, msg, data) {
      console.log(kind + ": " + msg, data);
    }
  });

  exports.default = socket;
  module.exports = exports["default"];
});