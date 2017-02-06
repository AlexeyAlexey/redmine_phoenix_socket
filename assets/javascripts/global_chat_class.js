"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserChat = function () {
    function UserChat(topic, identifier, socket) {
        _classCallCheck(this, UserChat);

        //constructor(topic, subtopic, globalChat)
        this.topic = topic; //socket topic
        this.identifier = identifier; //socket subtopic
        this.socket = socket;
        this.postButton = document.getElementById("msg-submit-" + this.identifier);
        this.msgInput = document.getElementById("msg-input-" + this.identifier);
        this.msgsContainer = document.getElementById("msgs-container-" + this.identifier);
        this.msgContainer = document.getElementById("msg-container-" + this.identifier);

        this.user = document.getElementById("user-" + this.identifier);

        //this.chatChannel = this.socket.channel(`${this.topic}:${this.identifier}`)
        //this.chatChannel.join()
        //.receive("ok", resp => { console.log("Joined successfully", resp) })
        //.receive("error", resp => { console.log("Unable to join", resp) })

        this.addEvent();

        this.constructor.userChatsCollection.push(this);
    }

    _createClass(UserChat, [{
        key: "addEvent",
        value: function addEvent() {
            var _this = this;

            //let vidChannel   = socket.channel("videos:" + videoId)
            var chatChannel = this.socket.channel(this.topic + ":" + this.identifier);

            this.postButton.addEventListener("click", function (e) {
                var template = document.createElement("div");
                var message = _this.msgInput.value;
                var payload = { body: message };

                template.innerHTML = "\n              <a href=\"#\" data-seek=\"0\"> " + _this.esc(_this.msgInput.value) + " </a>\n\t\t    ";
                _this.msgsContainer.appendChild(template);
                _this.msgInput.value = "";

                chatChannel.push("send_message", payload).receive("error", function (e) {
                    return console.log(e);
                });
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

            chatChannel.on("send_message", function (resp) {
                console.log(resp);
            });

            chatChannel.join().receive("ok", function (resp) {
                console.log("Joined successfully", resp);
            }).receive("error", function (resp) {
                console.log("Unable to join", resp);
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
            this.constructor.userChatsCollection.push(value);
        },
        get: function get() {
            return this.constructor.userChatsCollection;
        }
    }]);

    return UserChat;
}();

UserChat.userChatsCollection = [];
