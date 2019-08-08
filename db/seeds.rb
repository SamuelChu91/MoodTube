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
bye = Video.create!( title: "Game", description: "You know what time it is! Bought some Dame 5's right after this series", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/dame.jpg")
# bye.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/dame.jpg"), filename: "dame.jpg")
bye.pic.attach(io: file, filename: "dame.jpg")
ohno = Video.create!( title: "Oh no!", description: "Peak Joseph", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/joseph.jpg")
# ohno.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/joseph.jgp"), filename: "joseph.jpg")
ohno.pic.attach(io: file, filename: "joseph,jpg")
# need to attach in my seed file for heroku
lofi = Video.create!( title: "lofi hip hop mix - beats to relax/study to", description: "These beats have gotten me through tons of work", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/lofigirl.jpeg")
lofi.pic.attach(io: file, filename: "lofigirl.jpeg")

evo = Video.create!( title: "Evo Moment #37, Daigo vs Justin Evo 2004", description: "Still probably the coolest fighting game sequence of events ever.", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/evo.jpg")
evo.pic.attach(io: file, filename: "evo.jpg")

camp = Video.create!( title: "Why App Academy is the Best Decision I Ever Made", description: "Really glad I didn't give up and grateful for all the help I received.", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/bootcamp.png")
camp.pic.attach(io: file, filename: "bootcamp.png")

babish = Video.create!( title: "Weeknight Meals | Basics with Babish", description: "Some weeknights are meant for simplicity and these videos are super helpful and well produced.", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/babish.jpeg")
babish.pic.attach(io: file, filename: "babish.jpeg")

chuuper = Video.create!( title: "Chuuper Kha'Zix Pentakill - LoL S3 NA Qualifier", description: "Season 3 LCS NA Qualifier Match, proud of this moment", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/chuuper.jpeg")
chuuper.pic.attach(io: file, filename: "chuuper.jpeg")

kawhi = Video.create!( title: "Kawhi Leonard Wins The Series At The Buzzer!", description: "The Klaw! Amazing to watch live", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/kawhi.jpeg")
kawhi.pic.attach(io: file, filename: "kawhi.jpeg")

cap = Video.create!( title: "Avengers Assemble! - Endgame Spoilers", description: "The best scene from the MCU. Words can't describe the shivers felt during this moment", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/cap.jpg")
cap.pic.attach(io: file, filename: "cap.jpg")

bebop = Video.create!( title: "Cowboy Bebop OP HD", description: "To this day, the best anime opening of all time", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/bebop.jpeg")
bebop.pic.attach(io: file, filename: "bebop.jpg")

batman = Video.create!( title: "Batman: Mask of the Phantasm - Trailer", description: "Maybe the best Batman animated film", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/batman.jpeg")
batman.pic.attach(io: file, filename: "batman.jpeg")

xmen = Video.create!( title: "Xmen: The Animated Series - Opening", description: "To this day, the best cartoon opening of all time", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/xmen.jpg")
xmen.pic.attach(io: file, filename: "xmen.jpeg")

yuyu = Video.create!( title: "Yu Yu Hakusho OP HD", description: "Pretty close runner up, great in both languages! Great show", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/yuyu.jpeg")
yuyu.pic.attach(io: file, filename: "yuyu.jpeg")

hasan = Video.create!( title: "The Dark Side of the Video Game Industry", description: "Funny but informative, hit pretty close to home", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/hasan.jpeg")
hasan.pic.attach(io: file, filename: "hasan.jpeg")

worth = Video.create!( title: "$3 Ramen vs $79 Ramen - Japan", description: "Love learning more about food! Makes you pretty hungry though", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/worth.jpeg")
worth.pic.attach(io: file, filename: "worth.jpeg")

wombo = Video.create!( title: "WOMBO COMBO!!!", description: "Great moment in Smash, this game has a special place in my heart", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/wombo.jpeg")
wombo.pic.attach(io: file, filename: "wombo.jpeg")