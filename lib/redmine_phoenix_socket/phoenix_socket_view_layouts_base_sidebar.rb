module RedminePhoenixSocket
  class PhoenixSocketViewLayoutsBaseSidebar < Redmine::Hook::ViewListener
    def view_layouts_base_sidebar(context = {})
      context[:controller].send(:render_to_string, {partial: '/socket_chats/global_chat'})
    end
  end
end