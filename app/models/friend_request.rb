# == Schema Information
#
# Table name: friend_requests
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  accepted   :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates_uniqueness_of :friend_id, scope: :user_id

  belongs_to :user
  belongs_to :friend, class_name: :User
end
