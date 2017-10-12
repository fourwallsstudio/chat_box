class UsersController < ApplicationController
  before_action :authenticate_user!

  def search
    puts params
    @users = User.friend_search(params["search"])
    render json: @users
  end
end
