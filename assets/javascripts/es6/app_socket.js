import socket     from "./socket"
import GlobalChat from "./global_chat"


//GlobalChat.init(socket, document.getElementById("global_chat"))
GlobalChat.socket = socket
window.GlobalChat = GlobalChat

console.log('OK7')
//console.log(GlobalChat)