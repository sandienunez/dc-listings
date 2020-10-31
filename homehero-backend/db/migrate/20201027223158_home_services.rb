class HomeServices < ActiveRecord::Migration[6.0]
  def change
    create_table :homeservices do |t|
      t.string :types


 
      t.timestamps
    end
  end
end