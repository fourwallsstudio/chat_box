Rails.application.routes.draw do
  constraints format: :json do
    devise_for :users, controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }
  end
end
