@games.each do |game|
  json.set! game.id do
    json.id game.id
    json.date game.date
  end
end
