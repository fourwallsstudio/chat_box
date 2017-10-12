class FriendRequestsController < ApplicationController
  before_action :authenticate_user!

  def create
    @friend_request = FriendRequest.new(friend_request_params)

    if @friend_request.save
      render json: current_user
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  def update

    @friend_request = FriendRequest.find_by(
                        user_id: params[:friend_request][:user_id],
                        friend_id: params[:friend_request][:friend_id]
                      )

    @friend_request.accepted = true;

    if @friend_request.update(friend_request_params)
      Friendship.create({
          user_id: @friend_request.user_id,
          friend_id: @friend_request.friend_id
      })
      render json: current_user
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  def destroy
    friend_req_params =  JSON.parse(params[:friendRequest])

    @friend_request = FriendRequest.find_by user_id: friend_req_params["user_id"],
                                            friend_id: friend_req_params["friend_id"]

    @friend_request.destroy

    render json: current_user
  end

  private

    def friend_request_params
      params.require(:friend_request).permit(:user_id, :friend_id, :accepted)
    end
end
