class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :friends
end
