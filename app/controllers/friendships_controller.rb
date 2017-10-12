class FriendshipsController < ApplicationController
  before_action :authenticate_user!

  def destroy
    friendship_params =  JSON.parse(params[:friendship])

    @friendship = Friendship.find_by  user_id: friendship_params["user_id"],
                                      friend_id: friendship_params["friend_id"]

    @friendship.destroy

    destroy_friend_request  friendship_params["user_id"],
                            friendship_params["friend_id"]

    render json: current_user
  end

  private

    def destroy_friend_request(user_id, friend_id)
      fr = FriendRequest.find_by  user_id: user_id,
                                  friend_id: friend_id

      if fr
        fr.destroy
      else
        fr = FriendRequest.find_by  user_id: friend_id,
                                    friend_id: user_id
        fr.destroy if fr
      end
    end
end
