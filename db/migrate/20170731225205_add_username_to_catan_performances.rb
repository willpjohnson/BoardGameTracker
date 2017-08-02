class AddUsernameToCatanPerformances < ActiveRecord::Migration[5.0]
  def change
    add_column :catan_performances, :username, :string
  end
end
