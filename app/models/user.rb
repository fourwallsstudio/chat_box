# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class User < ApplicationRecord
  include PgSearch
  pg_search_scope :friend_search,
                  against: :email,
                  using: {
                    tsearch: {prefix: true}
                  }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :friendships
  has_many :inverse_friendships, class_name: :Friendship, foreign_key: :friend_id
  has_many :friend_requests
  has_many :inverse_friend_requests, class_name: :FriendRequest, foreign_key: :friend_id

  def friend_ids
    friendships.map(&:friend_id) + inverse_friendships.map(&:user_id)
  end

  def friends
    friend_ids.map { |id| User.find(id) }
  end

  def friend_requests_made
    friend_requests.map(&:friend_id)
  end

  def friend_requests_recieved
    inverse_friend_requests.map(&:user_id)
  end
end
