class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :name_of_business
      t.string :household_service
      t.text :business_hours
      t.string :covid_policy
      t.string :yelp_review_url
      t.text :mission_text
      t.string :contact_info


 
      t.timestamps
    end
  end
end