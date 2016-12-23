(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.global_chat = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var GlobalChat = {
    init: function init(socket, element) {
      console.log(!element);
      if (!element) {
        return;
      }
      var globalChatId = element.getAttribute("data-global-chat-id");
      var msgContainer = document.getElementById("msg-container");
      var msgInput = document.getElementById("msg-input");
      var msgButton = document.getElementById("msg-submit");

      socket.connect();

      var vidChannel = socket.channel("videos:" + globalChatId);
    },
    onReady: function onReady(globalChatId, socket) {}
  };

  exports.default = GlobalChat;
  module.exports = exports["default"];
});