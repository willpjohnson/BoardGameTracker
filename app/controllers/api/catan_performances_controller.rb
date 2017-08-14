class Api::CatanPerformancesController < ApplicationController
  def index
    @perfs = CatanPerformance.where(player_id: params[:user_id])
    render :index
  end
end
