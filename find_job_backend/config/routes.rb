Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'notes/show'
      get 'notes/create'
      get 'notes/update'
      get 'notes/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'to_dos/show'
      get 'to_dos/create'
      get 'to_dos/update'
      get 'to_dos/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'jobs/show'
      get 'jobs/create'
      get 'jobs/update'
      get 'jobs/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'educations/show'
      get 'educations/create'
      get 'educations/update'
      get 'educations/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'certifications/show'
      get 'certifications/create'
      get 'certifications/update'
      get 'certifications/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'employments/show'
      get 'employments/create'
      get 'employments/update'
      get 'employments/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'memberships/show'
      get 'memberships/create'
      get 'memberships/update'
      get 'memberships/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'skills/show'
      get 'skills/create'
      get 'skills/update'
      get 'skills/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'preferences/show'
      get 'preferences/create'
      get 'preferences/update'
      get 'preferences/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'users/show'
      get 'users/create'
      get 'users/update'
      get 'users/destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
