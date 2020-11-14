class ListingSerializer < ActiveModel::Serializer
  attributes :id, :ad_name, :business_name, :home_service_id, :logo_image, :ad_message, :ad_image, :updated_at

belongs_to :home_service
end
