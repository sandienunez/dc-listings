class HomeService < ApplicationRecord
    has_many :listings
    has_many :businesses, through: :listings     
end 