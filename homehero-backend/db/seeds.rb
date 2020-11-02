# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

listing = Listing.create({
    ad_name: "call us",
    business_name: "Perfect Maid"

    
})

listing_two = Listing.create(ad_name: "happy halloween", business_name: "penny's painters")
# binding.pry