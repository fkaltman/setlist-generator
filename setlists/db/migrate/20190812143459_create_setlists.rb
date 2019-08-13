class CreateSetlists < ActiveRecord::Migration[5.2]
  def change
    create_table :setlists do |t|
      t.date :date
      t.string :venue
      t.string :citystate
      t.time :length
      t.text :notes
      t.boolean :archived

      t.timestamps
    end
  end
end
