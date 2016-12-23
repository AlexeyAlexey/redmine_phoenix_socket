

let GlobalChat = {
  
  init(socket, element){
    console.log(!element)
    if(!element){ return }
    let globalChatId = element.getAttribute("data-global-chat-id")
    let msgContainer = document.getElementById("msg-container")
    let msgInput     = document.getElementById("msg-input")
    let msgButton    = document.getElementById("msg-submit")
    

    socket.connect()

    let vidChannel   = socket.channel("videos:" + globalChatId)
    
  },

  onReady(globalChatId, socket){
  }
}

export default GlobalChat