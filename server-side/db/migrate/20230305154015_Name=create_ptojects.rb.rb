class Name=createPtojects.rb < ActiveRecord::Migration[7.0]
  def change
    table :projects do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :skillone, null: true
      t.string :skilltwo, null: true
      t.string :skillthree, null: true
      t.string :skillfour, null: true
      t.string :skillfive, null: true
      t.string :skillsix, null: true
      t.string :skillseven, null: true
      t.string :skilleight, null: true
      t.string :skillnine, null: true
      t.string :skillten, null: true
      t.string :image, null: false
    end
  end
end
