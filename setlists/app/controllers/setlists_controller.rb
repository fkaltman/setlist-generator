class SetlistsController < ApplicationController
  def index
    @setlists = Setlists.all
    render json: @setlists, include: :songs, status: :ok
  end

  def show
    @setlist = Setlist.find(params[:id])
    render json: @setlists, include: :songs, status: :ok
  end

  def create
    @setlist = Setlist.new(setlist_params)
    if @setlist.save
      render json: @setlist
    end
  end  

  def update
    @setlist = Setlist.find(params[:id])
    if @setlist.update_attributes(setlist_params)
      render json: @setlist
    end
  end  

  def destroy
    @setlist = Setlist.find(params[:id])
    @setlist.destroy
    render json: @setlist
  end

  private

  def songlist_params
    params.require(:setlist).permit(:date, :venue, :citystate, :length, :notes)
    # do i need :archived in the above line?
  end
end
