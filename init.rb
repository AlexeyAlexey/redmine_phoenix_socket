ActionDispatch::Callbacks.to_prepare do
  #require_dependency "redmine_phoenix_socket/view_layouts_base_html_head.rb"
  require_dependency "redmine_phoenix_socket/phoenix_socket_view_layouts_base_sidebar.rb"

end

Redmine::Plugin.register :redmine_phoenix_socket do
  name 'Redmine Phoenix Socket plugin'
  author 'Author name'
  description 'This is a plugin for Redmine'
  version '0.0.1'
  url 'http://example.com/path/to/plugin'
  author_url 'http://example.com/about'
end
