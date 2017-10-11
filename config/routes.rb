Rails.application.routes.draw do
  constraints format: :json do
    devise_for :users, controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }

    resources :users, only: [] do
      get :search, on: :collection
    end
  end
end
