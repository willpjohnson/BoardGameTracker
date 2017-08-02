class Api::CatanGamesController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    @games = user.catan_games.limit(20)
    render :index
  end

  def show
    @game = CatanGame.find_by(id: params[:id])
    render :show
  end
end
