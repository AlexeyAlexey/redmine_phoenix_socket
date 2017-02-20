class UserChat {
    constructor(topic, identifier, socket, usersToken) {
        //constructor(topic, subtopic, globalChat)
        this.topic      = topic;//socket topic
        this.identifier = identifier;//socket subtopic
        this.socket     = socket;
        this.postButton = document.getElementById(`msg-submit-${this.identifier}`);
        this.msgInput   = document.getElementById(`msg-input-${this.identifier}`);
        this.msgsContainer = document.getElementById(`msgs-container-${this.identifier}`);
        this.msgContainer  = document.getElementById(`msg-container-${this.identifier}`);

        this.user       = document.getElementById(`user-${this.identifier}`);
        this.usersToken = usersToken
         
        //this.chatChannel = this.socket.channel(`${this.topic}:${this.identifier}`)
        //this.chatChannel.join()
            //.receive("ok", resp => { console.log("Joined successfully", resp) })
            //.receive("error", resp => { console.log("Unable to join", resp) })
        
        this.addEvent();
        
        this.constructor.userChatsCollection.push(this)
        
    }
    addEvent(){
      //let vidChannel   = socket.channel("videos:" + videoId)
      let chatChannel = this.socket.channel(`${this.topic}:${this.identifier}`, {usersToken: this.usersToken})
      
      this.postButton.addEventListener("click", e => {
         let template = document.createElement("div");
         let message = this.msgInput.value;
         let payload = {body: message};

         template.innerHTML = `
              <a href="#" data-seek="0"> ${this.esc(this.msgInput.value)} </a>
		    `
         this.msgsContainer.appendChild(template)
         this.msgInput.value = ""

         chatChannel.push("send_message", payload)
                .receive("error", e => console.log(e))
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

      chatChannel.on("send_message", (resp) => {
        console.log(resp)
      })

      chatChannel.join()
            .receive("ok", resp => { console.log("Joined successfully", resp) })
            .receive("error", resp => { console.log("Unable to join", resp) })
    }
    esc(str){
      let div = document.createElement("div")
      div.appendChild(document.createTextNode(str))
      return div.innerHTML
    }
    set userChatsCollection(value) {
        this.constructor.userChatsCollection.push(value);
    } 
    get userChatsCollection() {
        return this.constructor.userChatsCollection;
    }
}

UserChat.userChatsCollection = []