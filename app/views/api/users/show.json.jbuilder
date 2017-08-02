json.user_info do
  json.partial! "api/users/user", user: @user
end

json.game_stats do
  json.catan_stats do
    json.partial! "api/users/game_stats/catan_stats", performances: @user.catan_performances
  end
end

# json.partial! "api/users/user", user: @user
# json.partial!
