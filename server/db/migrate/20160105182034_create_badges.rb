class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :title
      t.belongs_to :student
      t.timestamps null: false
    end
  end
end
