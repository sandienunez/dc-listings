class Business < ApplicationRecord
    has_many :listings
    has_many :homeservices, through: :listings
end 