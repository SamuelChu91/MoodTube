# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all

# demo user
demo = User.create!( username: "De Mo", email: "AmIReal@email.com", password: "hunter12")

# video samples
pup = Video.create!( title: "Awww", description: "Huskies are the best", poster_id: demo.id )
bye = Video.create!( title: "Game", description: "You Know What Time It Is", poster_id: demo.id )
ohno = Video.create!( title: "Oh no!", description: "Peak Joseph", poster_id: demo.id )