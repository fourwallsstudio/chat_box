class UsersController < ApplicationController

  def search
    puts params
    @users = User.friend_search(params["search"])
    render json: @users
  end
end
