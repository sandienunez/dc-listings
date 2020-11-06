class AddHomeServicesToListings < ActiveRecord::Migration[6.0]
  def change
    add_column :listings, :home_service_id, :integer
  end
end
