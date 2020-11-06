# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

listing = Listing.create({
    # homeservice_id: 1
    ad_name: "call us",
    business_name: "Perfect Maid"

    
})

listing_two = Listing.create(ad_name: "happy halloween", business_name: "penny's painters")
homeService = HomeService.create({
    types: "Cleaning"

})
homeService_two = HomeService.create({
    types: "Painting"

})
homeService_three = HomeService.create({
    types: "Floors"

})
homeService_four = HomeService.create({
    types: "Roof"

})
homeService_five = HomeService.create({
    types: "Heat"

})
homeService_six = HomeService.create({
    types: "Electricity"

})
homeService_seven = HomeService.create({
    types: "Air"

})
homeService_eight = HomeService.create({
    types: "Window"

})
homeService_nine = HomeService.create({
    types: "Carpet"

})
homeService_ten = HomeService.create({
    types: "Plumbing"

})
homeService_eleven = HomeService.create({
    types: "Landscaping"

})
homeService_twelve = HomeService.create({
    types: "Remodel"

})

# binding.pry