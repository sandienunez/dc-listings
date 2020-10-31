class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name_of_business, :household_service, :business_hours, :covid_policy, :yelp_review_url, :mission_text, :contact_info

  # has_many :listings
end
