import socket     from "./socket"
import GlobalChat from "./global_chat"


GlobalChat.init(socket, document.getElementById("global_chat"))

