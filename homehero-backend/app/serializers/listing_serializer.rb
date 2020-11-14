class ListingSerializer < ActiveModel::Serializer
  attributes :id, :ad_name, :business_name, :home_service_id, :logo_image, :add_message, :add_image

belongs_to :home_service
end
