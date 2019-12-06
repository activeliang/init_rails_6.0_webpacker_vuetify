# config valid for current version and patch releases of Capistrano
lock "~> 3.11.2"
sh "ssh-add"

set :application, "init_vuetify"
set :repo_url, "git@github.com:activeliang/init_rails_webpacker_vuetify_jwt.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/deploy/init_vuetify"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }
set :passenger_restart_with_touch, true

# Default value for keep_releases is 5
set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
set :rvm_ruby_version, '2.6.5'
set :log_level, :debug
set :format_options, truncate: false
Rake::Task["deploy:compile_assets"].clear

namespace :deploy do
  desc 'Compile assets'
  task :compile_assets => [:set_rails_env] do
    invoke 'deploy:assets:precompile_local'
  end
  namespace :assets do
    desc "Precompile assets locally and then rsync to web servers"
    task :precompile_local do
      # compile assets locally
      run_locally do
        execute "RAILS_ENV=#{fetch(:stage)} bundle exec rake assets:precompile"
      end

      # rsync to each server
      on roles(:web), in: :parallel do |server|
        run_locally do
          execute :rsync,
            "-av --delete ./public/ #{'deploy'}@#{server.hostname}:#{release_path}/public/"
        end
      end

      run_locally do
        execute :rm, '-rf public/assets'
        execute :rm, '-rf public/packs'
        # execute :rm, 'public/index.html'
      end
    end
  end
end
