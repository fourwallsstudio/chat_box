# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



100.times do
  User.create({ email: Faker::Internet.email, password: '12345678' })
end

# 100.times do |i|
#   10.times do |j|
#     friend_id = (i + 10 + j) % 100
#     Friendship.create({ user_id: i, friend_id: friend_id })
#   end
# end
