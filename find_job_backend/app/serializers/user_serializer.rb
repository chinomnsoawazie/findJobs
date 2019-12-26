class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest, :email, :country, :state, :city, :age, :integer, :highest_education, :years_of_experience, :prefence, :skill, :membership, :employment_history, :certification, :education_history, :job
end
