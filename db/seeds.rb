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
file = open("https://moodtube-seeds.s3.amazonaws.com/two_puppies.png?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQC%2Bw2s2FLsKRQmWs6RTPI6GX%2BKrFenDxNEL58s837rbPQIgFZ0W7l7fyFLALpS8nV1N0rsCwA3o%2BoAdIYt6LdgvP%2Fkq2wMISBAAGgwxMzQxNzY3OTAxNjciDDlXy2C5ZvL3zsC85Cq4AyWvsU1ZtoqOYmV4cFH%2BERR0xBFI0Oay5YJYupFJqTVQ3LIRqKBBQtPtrtjgcZ6zABI%2B2HWmLIUAubGGCvsFAKELCBZR%2FygOTqQQlHlyhaik7bagmRlj7X%2FW1hCNEGszzwLFcBIs09%2BqvHmzfxG9yIUyb%2BooSJlcV6UsrMxy2D0E9wbBwPZ7Vni47R0dWwwbNCf3GrpazlWbZtIeepDusbGCpb78sPJ0sKrzQHFZKUL0u47BCVS13g2%2BMZgftVzws5V7fD8aO1bVEDn18A1e%2F3dI8UnSfQ1y8s9YdZp%2F6MKxjcBObqRJU00aegFUFocZjJrFkQixU3OmWj6zZbPxxpi%2B3h%2BJ7nJ10ZydTJLe7CKYu6KqAOu25PaMjuelAIY%2FOJDvnULcOq6s19g%2BMnVf1QsV6Ix9z0oYSc1So25DYkFcY1DUziVijEhgnX3b6CfpJHhF2kYfddlqJnaja%2BhzJQU5HJTCwmoLx0Pr4RgHA12Lwd1ldyU%2BhiFeW2mjpvXsNirgiZ5BjwN3J%2BmMf%2FwQXhV2jpNqOCoAuFGYFTnSRfS9gNAZfjotVj9R0yRaEbKqS7j%2F7hNiRbXVMPCapuoFOrQB38%2FWGRrE1hRx09nxgnLw3HamJKEfo%2BKAuxQuwBSIlxxeazDuMkxu%2BtZyduRMlk5%2Fa9F6%2Fk7lrV8RDsKcBQREEgDHwCosq4lXQZUY09tNcxbClMaVP59UiA3PGVL9%2BnCj5xeZi4vhpuyxJy1LpBbJLfyIe2L3rZrbBbtobb0X5mfFwr%2F01o03dyzzCLhrZMsDGHGTgfztBReza93U9rc2wM3O0rKq8KTPmHr8R0BJ3XuYo3o5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190806T191208Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR6PMPK2LQNAJP4OQ%2F20190806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=685d76eb480b0bb1e5d5a6b77311ebf29add76e2254eabcabfec2aea56c3d9c8")
# pup.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/two_puppies.png"), filename: "two_puppies.png")
pup.pic.attach(io: file, filename: "two_puppies.png")
bye = Video.create!( title: "Game", description: "You Know What Time It Is", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/dame.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQC%2Bw2s2FLsKRQmWs6RTPI6GX%2BKrFenDxNEL58s837rbPQIgFZ0W7l7fyFLALpS8nV1N0rsCwA3o%2BoAdIYt6LdgvP%2Fkq2wMISBAAGgwxMzQxNzY3OTAxNjciDDlXy2C5ZvL3zsC85Cq4AyWvsU1ZtoqOYmV4cFH%2BERR0xBFI0Oay5YJYupFJqTVQ3LIRqKBBQtPtrtjgcZ6zABI%2B2HWmLIUAubGGCvsFAKELCBZR%2FygOTqQQlHlyhaik7bagmRlj7X%2FW1hCNEGszzwLFcBIs09%2BqvHmzfxG9yIUyb%2BooSJlcV6UsrMxy2D0E9wbBwPZ7Vni47R0dWwwbNCf3GrpazlWbZtIeepDusbGCpb78sPJ0sKrzQHFZKUL0u47BCVS13g2%2BMZgftVzws5V7fD8aO1bVEDn18A1e%2F3dI8UnSfQ1y8s9YdZp%2F6MKxjcBObqRJU00aegFUFocZjJrFkQixU3OmWj6zZbPxxpi%2B3h%2BJ7nJ10ZydTJLe7CKYu6KqAOu25PaMjuelAIY%2FOJDvnULcOq6s19g%2BMnVf1QsV6Ix9z0oYSc1So25DYkFcY1DUziVijEhgnX3b6CfpJHhF2kYfddlqJnaja%2BhzJQU5HJTCwmoLx0Pr4RgHA12Lwd1ldyU%2BhiFeW2mjpvXsNirgiZ5BjwN3J%2BmMf%2FwQXhV2jpNqOCoAuFGYFTnSRfS9gNAZfjotVj9R0yRaEbKqS7j%2F7hNiRbXVMPCapuoFOrQB38%2FWGRrE1hRx09nxgnLw3HamJKEfo%2BKAuxQuwBSIlxxeazDuMkxu%2BtZyduRMlk5%2Fa9F6%2Fk7lrV8RDsKcBQREEgDHwCosq4lXQZUY09tNcxbClMaVP59UiA3PGVL9%2BnCj5xeZi4vhpuyxJy1LpBbJLfyIe2L3rZrbBbtobb0X5mfFwr%2F01o03dyzzCLhrZMsDGHGTgfztBReza93U9rc2wM3O0rKq8KTPmHr8R0BJ3XuYo3o5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190806T191145Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR6PMPK2LQNAJP4OQ%2F20190806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8dc9b5f525679ac201af799cfd617c97b7a87828f7499e713fab1c0babf0b2b")
# bye.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/dame.jpg"), filename: "dame.jpg")
bye.pic.attach(io: file, filename: "dame.jpg")
ohno = Video.create!( title: "Oh no!", description: "Peak Joseph", poster_id: demo.id )
file = open("https://moodtube-seeds.s3.amazonaws.com/joseph.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQC%2Bw2s2FLsKRQmWs6RTPI6GX%2BKrFenDxNEL58s837rbPQIgFZ0W7l7fyFLALpS8nV1N0rsCwA3o%2BoAdIYt6LdgvP%2Fkq2wMISBAAGgwxMzQxNzY3OTAxNjciDDlXy2C5ZvL3zsC85Cq4AyWvsU1ZtoqOYmV4cFH%2BERR0xBFI0Oay5YJYupFJqTVQ3LIRqKBBQtPtrtjgcZ6zABI%2B2HWmLIUAubGGCvsFAKELCBZR%2FygOTqQQlHlyhaik7bagmRlj7X%2FW1hCNEGszzwLFcBIs09%2BqvHmzfxG9yIUyb%2BooSJlcV6UsrMxy2D0E9wbBwPZ7Vni47R0dWwwbNCf3GrpazlWbZtIeepDusbGCpb78sPJ0sKrzQHFZKUL0u47BCVS13g2%2BMZgftVzws5V7fD8aO1bVEDn18A1e%2F3dI8UnSfQ1y8s9YdZp%2F6MKxjcBObqRJU00aegFUFocZjJrFkQixU3OmWj6zZbPxxpi%2B3h%2BJ7nJ10ZydTJLe7CKYu6KqAOu25PaMjuelAIY%2FOJDvnULcOq6s19g%2BMnVf1QsV6Ix9z0oYSc1So25DYkFcY1DUziVijEhgnX3b6CfpJHhF2kYfddlqJnaja%2BhzJQU5HJTCwmoLx0Pr4RgHA12Lwd1ldyU%2BhiFeW2mjpvXsNirgiZ5BjwN3J%2BmMf%2FwQXhV2jpNqOCoAuFGYFTnSRfS9gNAZfjotVj9R0yRaEbKqS7j%2F7hNiRbXVMPCapuoFOrQB38%2FWGRrE1hRx09nxgnLw3HamJKEfo%2BKAuxQuwBSIlxxeazDuMkxu%2BtZyduRMlk5%2Fa9F6%2Fk7lrV8RDsKcBQREEgDHwCosq4lXQZUY09tNcxbClMaVP59UiA3PGVL9%2BnCj5xeZi4vhpuyxJy1LpBbJLfyIe2L3rZrbBbtobb0X5mfFwr%2F01o03dyzzCLhrZMsDGHGTgfztBReza93U9rc2wM3O0rKq8KTPmHr8R0BJ3XuYo3o5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190806T191056Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR6PMPK2LQNAJP4OQ%2F20190806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=855da0bfd9e14008f12056d31ebe613ff7e3c098245904c6d5ab2fef58ba142f")
# ohno.pic.attach(io: File.open("/Users/lingxiahe/Documents/Pictures/joseph.jgp"), filename: "joseph.jpg")
ohno.pic.attach(io: file, filename: "joseph,jpg")
# need to attach in my seed file for heroku
