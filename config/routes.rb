Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos do
      resources :comments, only: [:create, :destroy, :edit, :index]
    end

    get 'api/videos/:string', :to => 'api#search'
  end

end


# verb 'url', :to => 'api#videos_search'
# db models controllers routes 
# jbuilders ajax actions reducers components