class SocketGlobalChatsController < ApplicationController
  unloadable
  layout 'global_chat'

  include SocketGlobalChatsHelper
  helper :socket_global_chats

  before_filter :require_login


  def show
  	secret = get_secret("Vq2aQ/lrlIxQKg8KBy2sSVNFWTa08fAueBVMDasIYFikE6GCPVYa+smDZdyo/suI", 'salt')
    data   = socket_data({key1: 'value', key2: 'value'}, timestamp=nil)
    @signature = sign(secret, data, digest_type="sha256", opts = [])
  end
end
