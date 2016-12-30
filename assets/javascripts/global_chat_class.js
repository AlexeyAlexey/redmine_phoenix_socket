"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserChat = function () {
    function UserChat(identifier, globalChat) {
        _classCallCheck(this, UserChat);

        this.identifier = identifier;
        this.socket = globalChat.socket;
        this.postButton = document.getElementById("msg-submit-" + this.identifier);
        this.msgInput = document.getElementById("msg-input-" + this.identifier);
        this.msgsContainer = document.getElementById("msgs-container-" + this.identifier);
        this.msgContainer = document.getElementById("msg-container-" + this.identifier);

        this.user = document.getElementById("user-" + this.identifier);

        this.addEvent();
        //this.globalChatChanel = socket.channel("global_chat:" + identifier)
        this.constructor.userChatsCollection.push(this);
    }

    _createClass(UserChat, [{
        key: "addEvent",
        value: function addEvent() {
            var _this = this;

            //let vidChannel   = socket.channel("videos:" + videoId)

            this.postButton.addEventListener("click", function (e) {
                var template = document.createElement("div");

                template.innerHTML = "\n              <a href=\"#\" data-seek=\"0\"> " + _this.esc(_this.msgInput.value) + " </a>\n\t\t    ";
                _this.msgsContainer.appendChild(template);
                _this.msgInput.value = "";
            });

            this.user.addEventListener("click", function (e) {
                //UserChat.userChatsCollection[1].msgContainer.style.visibility = "hidden"
                _this.constructor.userChatsCollection.forEach(function (element, index, array) {
                    if (element.msgContainer.style.visibility = "visible") {
                        element.msgContainer.style.visibility = "hidden";
                    }
                });
                _this.msgContainer.style.visibility = "visible";
            });
        }
    }, {
        key: "esc",
        value: function esc(str) {
            var div = document.createElement("div");
            div.appendChild(document.createTextNode(str));
            return div.innerHTML;
        }
    }, {
        key: "userChatsCollection",
        set: function set(value) {
            this.constructor.userChatsCollection = value;
        },
        get: function get() {
            return this.constructor.userChatsCollection;
        }
    }, {
        key: "x",
        get: function get() {
            return this.constructor.x;
        },
        set: function set(value) {
            this.constructor.x = value;
        }
    }]);

    return UserChat;
}();

UserChat.userChatsCollection = [];