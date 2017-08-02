class CreateCatanPerformances < ActiveRecord::Migration[5.0]
  def change
    create_table :catan_performances do |t|
      t.integer :player_id, null: false
      t.integer :game_id, null: false

      t.integer :roads, null: false
      t.integer :settlements, null: false
      t.integer :cities, null: false
      t.integer :dcs, null: false
      t.integer :harbors, null: false
      t.integer :order, null: false
      t.integer :points, null: false

      t.boolean :longest_road, null: false, default: false
      t.boolean :largest_army, null: false, default: false
      t.boolean :winner, null: false, default: false

      t.timestamps
    end

    add_index :catan_performances, :player_id
    add_index :catan_performances, :game_id
  end
end
