json.extract! @game, :id, :date

@game.performances.each do |performance|
  json.set! performance.id do
    json.id performance.id
    json.player_id performance.player_id
    json.game_id performance.game_id
    json.roads performance.roads
    json.settlements performance.settlements
    json.cities performance.cities
    json.harbors performance.harbors
    json.dcs performance.dcs
    json.points performance.points
    json.order performance.order
    json.winner performance.winner
    json.longest_road performance.longest_road
    json.largest_army performance.largest_army
    json.username performance.username
  end
end
