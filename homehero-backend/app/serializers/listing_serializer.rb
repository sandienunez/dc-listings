class ListingSerializer < ActiveModel::Serializer
  attributes :id, :ad_name, :business_name, :home_service_id

belongs_to :home_service
end
