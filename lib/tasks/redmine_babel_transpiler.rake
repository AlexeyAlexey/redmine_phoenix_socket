namespace :babel_transpiler do
  desc 'babel_transpiler'
  #RAILS_ENV=development rake babel_transpiler:transform file_path="./plugins/redmine_phoenix_socket/assets/javascripts/phoenix.es6" output_file_path="./plugins/redmine_phoenix_socket/assets/javascripts/phoenix.js"
  task :transform => :environment do
    file_path        = Rails.root + ENV['file_path']
    output_file_path = ENV['output_file_path']

    x = open("|babel #{file_path}")
        
    output_file = File.new(output_file_path, "a")
    
    
    output_file.puts x.read

  end	
end