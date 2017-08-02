# == Schema Information
#
# Table name: catan_games
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CatanGame < ApplicationRecord
  validates :date, presence: true

  has_many :performances,
    class_name: :CatanPerformance,
    foreign_key: :game_id

  has_many :players,
    through: :performances,
    source: :player

end
