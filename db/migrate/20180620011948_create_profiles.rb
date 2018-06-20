class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :user_name
      t.integer :age
      t.string :hobbies
      t.string :avatar

      t.timestamps
    end
  end
end
