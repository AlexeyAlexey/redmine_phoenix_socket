(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./socket", "./global_chat"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./socket"), require("./global_chat"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.socket, global.global_chat);
    global.app_socket = mod.exports;
  }
})(this, function (_socket, _global_chat) {
  "use strict";

  var _socket2 = _interopRequireDefault(_socket);

  var _global_chat2 = _interopRequireDefault(_global_chat);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _global_chat2.default.init(_socket2.default, document.getElementById("global_chat"));
});