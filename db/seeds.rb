# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

# demo user
demo = User.create!( username: "De Mo", email: "AmIReal@email.com", password: "hunter12")

# video samples
pup = Video.create!( title: "Awww", description: "Huskies are the best", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/two_puppies.png")
# pup.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/two_puppies.png"), filename: "two_puppies.png")
pup.pic.attach(io: file, filename: "two_puppies.png")
bye = Video.create!( title: "Game", description: "You Know What Time It Is", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/dame.jpg")
# bye.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/dame.jpg"), filename: "dame.jpg")
bye.pic.attach(io: file, filename: "dame.jpg")
ohno = Video.create!( title: "Oh no!", description: "Peak Joseph", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/joseph.jpg")
# ohno.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/joseph.jgp"), filename: "joseph.jpg")
ohno.pic.attach(io: file, filename: "joseph,jpg")
# need to attach in my seed file for heroku
lofi = Video.create!( title: "Lofi hip hop mix - Beats to Relax/Study to", description: "Thank you for listening, I hope you will have a good time here", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/lofigirl.jpeg")
lofi.pic.attach(io: file, filename: "lofigirl.jpeg")

evo = Video.create!( title: "Official Evo Moment #37, Daigo vs Justin Evo 2004", description: "This is the official Daigo vs Justin Parry Moment.", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/evo.jpg")
evo.pic.attach(io: file, filename: "evo.jpg")

camp = Video.create!( title: "Why App Academy is the Best Decision I Ever Made", description: "Hopefully this video helped you guys.", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/bootcamp.png")
camp.pic.attach(io: file, filename: "boot")