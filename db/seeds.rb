# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
will = User.create({username: 'willjohnson', password: 'adminsrights'})
cono = User.create({username: 'conorfinn', password: 'adminsrights'})
kyle = User.create({username: 'kylewalsh', password: 'adminsrights'})
gale = User.create({username: 'galendavis', password: 'adminsrights'})

CatanGame.destroy_all
cg103115a = CatanGame.create({date: Date.parse("2015-10-31")})
cg111815a = CatanGame.create({date: Date.parse("2015-11-18")})
cg111815b = CatanGame.create({date: Date.parse("2015-11-18")})
cg112815a = CatanGame.create({date: Date.parse("2015-11-28")})
cg121315a = CatanGame.create({date: Date.parse("2015-12-13")})
cg121815a = CatanGame.create({date: Date.parse("2015-12-18")})
cg010616a = CatanGame.create({date: Date.parse("2016-01-06")})
cg020216a = CatanGame.create({date: Date.parse("2016-02-02")})
cg072216a = CatanGame.create({date: Date.parse("2016-07-22")})

CatanPerformance.destroy_all
CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg103115a.id, roads: 8, settlements: 5, cities: 1,
  points: 7, dcs: 4, harbors: 1, order: 1, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "galendavis", player_id: gale.id, game_id: cg103115a.id, roads: 7, settlements: 3, cities: 1,
  points: 7, dcs: 4, harbors: 2, order: 2, longest_road: false, largest_army: true, winner: false})
CatanPerformance.create({username: "kylewalsh", player_id: kyle.id, game_id: cg103115a.id, roads: 14, settlements: 2, cities: 3,
  points: 10, dcs: 1, harbors: 1, order: 3, longest_road: true, largest_army: false, winner: true})

CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg111815a.id, roads: 10, settlements: 4, cities: 2,
  points: 9, dcs: 2, harbors: 1, order: 2, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "galendavis", player_id: gale.id, game_id: cg111815a.id, roads: 7, settlements: 4, cities: 0,
  points: 6, dcs: 3, harbors: 2, order: 3, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "willjohnson", player_id: will.id, game_id: cg111815a.id, roads: 9, settlements: 1, cities: 2,
  points: 10, dcs: 6, harbors: 1, order: 1, longest_road: true, largest_army: true, winner: true})

CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg111815b.id, roads: 10, settlements: 2, cities: 3,
  points: 10, dcs: 2, harbors: 1, order: 3, longest_road: true, largest_army: false, winner: true})
CatanPerformance.create({username: "galendavis", player_id: gale.id, game_id: cg111815b.id, roads: 8, settlements: 3, cities: 0,
  points: 3, dcs: 2, harbors: 2, order: 1, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "willjohnson", player_id: will.id, game_id: cg111815b.id, roads: 7, settlements: 4, cities: 0,
  points: 4, dcs: 3, harbors: 1, order: 2, longest_road: false, largest_army: false, winner: false})

CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg112815a.id, roads: 8, settlements: 5, cities: 0,
  points: 7, dcs: 5, harbors: 1, order: 1, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "kylewalsh", player_id: kyle.id, game_id: cg112815a.id, roads: 7, settlements: 2, cities: 3,
  points: 8, dcs: 0, harbors: 1, order: 2, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "willjohnson", player_id: will.id, game_id: cg112815a.id, roads: 6, settlements: 2, cities: 2,
  points: 10, dcs: 4, harbors: 1, order: 3, longest_road: true, largest_army: true, winner: true})

CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg121315a.id, roads: 5, settlements: 0, cities: 3,
  points: 6, dcs: 1, harbors: 1, order: 2, longest_road: true, largest_army: false, winner: true})
CatanPerformance.create({username: "kylewalsh", player_id: kyle.id, game_id: cg121315a.id, roads: 11, settlements: 4, cities: 1,
  points: 7, dcs: 2, harbors: 1, order: 3, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "willjohnson", player_id: will.id, game_id: cg121315a.id, roads: 11, settlements: 0, cities: 4,
  points: 10, dcs: 3, harbors: 1, order: 1, longest_road: false, largest_army: false, winner: false})

CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg121815a.id, roads: 9, settlements: 0, cities: 3,
  points: 6, dcs: 4, harbors: 0, order: 4, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "galendavis", player_id: gale.id, game_id: cg121815a.id, roads: 8, settlements: 3, cities: 1,
  points: 7, dcs: 1, harbors: 2, order: 3, longest_road: true, largest_army: false, winner: false})
CatanPerformance.create({username: "kylewalsh", player_id: kyle.id, game_id: cg121815a.id, roads: 6, settlements: 1, cities: 3,
  points: 10, dcs: 5, harbors: 1, order: 1, longest_road: false, largest_army: true, winner: true})
CatanPerformance.create({username: "willjohnson", player_id: will.id, game_id: cg121815a.id, roads: 6, settlements: 4, cities: 1,
  points: 8, dcs: 8, harbors: 2, order: 2, longest_road: false, largest_army: false, winner: false})

CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg010616a.id, roads: 10, settlements: 5, cities: 0,
  points: 10, dcs: 7, harbors: 0, order: 2, longest_road: true, largest_army: false, winner: true})
CatanPerformance.create({username: "galendavis", player_id: gale.id, game_id: cg010616a.id, roads: 6, settlements: 4, cities: 0,
  points: 5, dcs: 3, harbors: 2, order: 1, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "kylewalsh", player_id: kyle.id, game_id: cg010616a.id, roads: 5, settlements: 4, cities: 0,
  points: 4, dcs: 0, harbors: 1, order: 3, longest_road: false, largest_army: false, winner: false})

CatanPerformance.create({username: "galendavis", player_id: gale.id, game_id: cg020216a.id, roads: 10, settlements: 3, cities: 1,
  points: 6, dcs: 5, harbors: 2, order: 2, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "kylewalsh", player_id: kyle.id, game_id: cg020216a.id, roads: 13, settlements: 4, cities: 2,
  points: 10, dcs: 3, harbors: 2, order: 1, longest_road: true, largest_army: false, winner: true})
CatanPerformance.create({username: "willjohnson", player_id: will.id, game_id: cg020216a.id, roads: 9, settlements: 4, cities: 0,
  points: 8, dcs: 10, harbors: 0, order: 3, longest_road: false, largest_army: true, winner: false})

CatanPerformance.create({username: "conorfinn", player_id: cono.id, game_id: cg072216a.id, roads: 10, settlements: 3, cities: 2,
  points: 10, dcs: 1, harbors: 2, order: 1, longest_road: true, largest_army: false, winner: true})
CatanPerformance.create({username: "kylewalsh", player_id: kyle.id, game_id: cg072216a.id, roads: 11, settlements: 4, cities: 1,
  points: 6, dcs: 2, harbors: 1, order: 2, longest_road: false, largest_army: false, winner: false})
CatanPerformance.create({username: "willjohnson", player_id: will.id, game_id: cg072216a.id, roads: 7, settlements: 2, cities: 2,
  points: 6, dcs: 3, harbors: 1, order: 3, longest_road: false, largest_army: false, winner: false})
