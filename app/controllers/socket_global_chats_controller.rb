class SocketGlobalChatsController < ApplicationController
  unloadable
  layout 'global_chat'

  before_filter :require_login


  def show
  end
end
