Rails.application.routes.draw do
  constraints format: :json do
    devise_for :users, controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }

    resources :users, only: [] do
      get :search, on: :collection
    end

    resources :friend_requests, only: [:create, :update, :destroy]
    resources :friendships, only: [:destroy]
  end
end
