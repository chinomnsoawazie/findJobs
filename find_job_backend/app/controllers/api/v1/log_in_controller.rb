class Api::V1::LogInController < ApplicationController

  def create
    user = User.find_by(params[:username].downcase)
    if user && user.authenticate(params[:password_digest])
      render json: { token: token(user.id), user: user }
    else
      render json: { errors: [ "User not found" ] }, status: :unprocessable_entity
    end 
  end

end
