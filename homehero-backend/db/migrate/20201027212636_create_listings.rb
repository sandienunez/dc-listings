class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :ad_name 
      t.string :business_name
      t.string :business_site_url
      t.text :ad_message
      

 
      t.timestamps
    end
  end
end
