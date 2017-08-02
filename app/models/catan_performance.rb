# == Schema Information
#
# Table name: catan_performances
#
#  id           :integer          not null, primary key
#  player_id    :integer          not null
#  game_id      :integer          not null
#  roads        :integer          not null
#  settlements  :integer          not null
#  cities       :integer          not null
#  dcs          :integer          not null
#  harbors      :integer          not null
#  order        :integer          not null
#  points       :integer          not null
#  longest_road :boolean          default(FALSE), not null
#  largest_army :boolean          default(FALSE), not null
#  winner       :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  username     :string
#

class CatanPerformance < ApplicationRecord
  validates_uniqueness_of :player_id, scope: [:game_id]
  validates :player_id, :game_id, presence: true
  validates :roads, :settlements, :cities, :dcs, :harbors, :order, :points, presence: true

  belongs_to :player,
    class_name: :User,
    foreign_key: :player_id

  belongs_to :game,
    class_name: :CatanGame,
    foreign_key: :game_id


end
