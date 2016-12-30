class UserChat {
    constructor(identifier, globalChat) {
        this.identifier = identifier;
        this.socket     = globalChat.socket;
        this.postButton = document.getElementById(`msg-submit-${this.identifier}`);
        this.msgInput   = document.getElementById(`msg-input-${this.identifier}`);
        this.msgsContainer = document.getElementById(`msgs-container-${this.identifier}`);
        this.msgContainer = document.getElementById(`msg-container-${this.identifier}`);

        this.user       = document.getElementById(`user-${this.identifier}`);

        this.addEvent();
        //this.globalChatChanel = socket.channel("global_chat:" + identifier)
        this.constructor.userChatsCollection.push(this)
        
    }
    addEvent(){
      //let vidChannel   = socket.channel("videos:" + videoId)

      this.postButton.addEventListener("click", e => {
         let template = document.createElement("div");

         template.innerHTML = `
              <a href="#" data-seek="0"> ${this.esc(this.msgInput.value)} </a>
		    `
         this.msgsContainer.appendChild(template)
         this.msgInput.value = ""
      });	

      this.user.addEventListener("click", e => {
      	//UserChat.userChatsCollection[1].msgContainer.style.visibility = "hidden"
      	this.constructor.userChatsCollection.forEach(function(element, index, array) {
      	  if (element.msgContainer.style.visibility = "visible") {
            element.msgContainer.style.visibility = "hidden"
      	  }
      	})
        this.msgContainer.style.visibility = "visible";  
      });
    }
    esc(str){
      let div = document.createElement("div")
      div.appendChild(document.createTextNode(str))
      return div.innerHTML
    }
    set userChatsCollection(value) {
        this.constructor.userChatsCollection = value;
    } 
    get userChatsCollection() {
        return this.constructor.userChatsCollection;
    }    
    get x() {
        return this.constructor.x;
    }
    set x(value) {
        this.constructor.x = value;
    }
}

UserChat.userChatsCollection = []