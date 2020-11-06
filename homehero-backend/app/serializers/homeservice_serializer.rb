class HomeserviceSerializer < ActiveModel::Serializer
  attributes :id, :types

  has_many :listings
end
