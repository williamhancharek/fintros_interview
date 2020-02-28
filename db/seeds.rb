# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Getting new stories first, but that only gets you 500

new_stories = HTTParty.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")

new_stories.each do |t|
    url = "https://hacker-news.firebaseio.com/v0/item/#{t}.json?print=pretty"
    story = HTTParty.get(url)
    Story.create(title:story["title"], url: story["url"])
end

#need to find the last 500 stories, iterate through the items and when it's a story, add to database, 
#otherwise continue
last_url = new_stories.last
count = Story.all.count
while count < 1000 do
    last_url = last_url - 1
    story = HTTParty.get("https://hacker-news.firebaseio.com/v0/item/#{last_url}.json?print=pretty")
    if story["type"] == "story"
        Story.create(title:story["title"], url: story["url"])
        count += 1
    end
end