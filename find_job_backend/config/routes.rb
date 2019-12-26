Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'log_in/create'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'notes/show'
      post 'notes/create'
      patch 'notes/update'
      delete 'notes/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'to_dos/show'
      post 'to_dos/create'
      patch 'to_dos/update'
      delete 'to_dos/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'jobs/show'
      post 'jobs/create'
      patch 'jobs/update'
      delete 'jobs/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'educations/show'
      post 'educations/create'
      patch 'educations/update'
      delete 'educations/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'certifications/show'
      post 'certifications/create'
      patch 'certifications/update'
      delete 'certifications/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'employments/show'
      post 'employments/create'
      patch 'employments/update'
      delete 'employments/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'memberships/show'
      post 'memberships/create'
      patch 'memberships/update'
      delete 'memberships/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'skills/show'
      post 'skills/create'
      patch 'skills/update'
      delete 'skills/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'preferences/show'
      post 'preferences/create'
      patch 'preferences/update'
      delete 'preferences/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'users/show'
      post 'users/create'
      patch 'users/update'
      delete 'users/destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
