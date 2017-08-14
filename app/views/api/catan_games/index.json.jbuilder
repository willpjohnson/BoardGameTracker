@games.each do |game|
  json.set! game.id do
    json.id game.id
    json.date game.date
    game.performances.each do |perf|
      json.set! perf.username do
        json.id perf.id
        json.winner perf.winner
        json.longest_road perf.longest_road
        json.largest_army perf.largest_army
        json.points perf.points
        json.roads perf.roads
        json.settlements perf.settlements
        json.cities perf.cities
        json.harbors perf.harbors
        json.dcs perf.dcs
      end
    end
  end
end
