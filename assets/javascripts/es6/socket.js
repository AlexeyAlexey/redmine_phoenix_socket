import {Socket} from "phoenix"


let socket = new Socket("ws://192.168.60.60:4000/socket", {
  params: {token: window.userToken},
  logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
})

export default socket

