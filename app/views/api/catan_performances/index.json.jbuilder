@perfs.each do |perf|
  json.set! perf.game.date do
    json.winner perf.winner
    json.longest_road perf.longest_road
    json.largest_army perf.largest_army
    json.points perf.points
    json.roads perf.roads
    json.settlements perf.settlements
    json.cities perf.cities
    json.dcs perf.dcs
    json.harbors perf.harbors
    json.order perf.order
  end
end
