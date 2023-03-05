class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :skillone
      t.string :skilltwo
      t.string :skillthree
      t.string :skillfour
      t.string :skillfive
      t.string :skillsix
      t.string :skillseven
      t.string :skilleight
      t.string :skillnine
      t.string :skillten
      t.string :image, null: false
      t.datetime :created_at, null:false
      t.datetime :updated_at, null:false
      t.integer :status, null: false, default: 0
    end
  end
end
