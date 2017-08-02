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

require 'test_helper'

class CatanPerformanceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
