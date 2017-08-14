games, wins, points, roads, settlements, cities, dcs, harbors, order, la, lr = 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
performances.each do |perf|
  games += 1
  wins += 1 if perf.winner
  la += 1 if perf.largest_army
  lr += 1 if perf.longest_road
  points += perf.points
  roads += perf.roads
  settlements += perf.settlements
  cities += perf.cities
  dcs += perf.dcs
  harbors += perf.harbors
  order += perf.order
end

json.games games
json.wins wins
json.points points
json.roads roads
json.settlements settlements
json.cities cities
json.dcs dcs
json.harbors harbors
json.la la
json.lr lr
json.order order
