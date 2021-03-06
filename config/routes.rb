Todo::Application.routes.draw do
  resources :users do
    resources :lists, except: [:index]
  end

  resources :lists, only: [] do
    resources :items, only: [:create, :new, :update]
  end

  resources :items, only: [:destroy, :update]

  namespace :api do
    resources :users, only: [:create, :index] do
      resources :lists, only: [:create, :index, :update] do
        resources :items, only: [:create, :index, :update, :destroy]
      end
      resources :items, only: [:destroy]
    end
  end

  root to: 'users#new'
end
