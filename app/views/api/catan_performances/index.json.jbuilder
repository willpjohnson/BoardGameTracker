@perfs.each do |perf|
  json.set! perf.id do
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
    json.date perf.game.date
  end
end
