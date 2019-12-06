Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post 'login' => 'session#create'
      post 'refresh' => 'session#refresh'
      delete 'logout' => 'session#destroy'

      resources :users
    end
  end

  root :to => "application#index"
  # mount ExceptionTrack::Engine => "/err", constraints: AdminConstraint.new
  mount ExceptionTrack::Engine => "/err"

  match "*path", to: "application#index", format: false, via: :get
end
