class CreateCatanGames < ActiveRecord::Migration[5.0]
  def change
    create_table :catan_games do |t|
      t.date :date, null: false
      
      t.timestamps
    end
  end
end
