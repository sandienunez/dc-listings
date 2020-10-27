class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :ad_name 
      t.string :business_name
      t.string :logo_image_url
      t.string :location
      t.string :add_message
      t.string :add_image_url

 
      t.timestamps
    end
  end
end
