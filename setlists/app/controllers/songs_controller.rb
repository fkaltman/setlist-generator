class SongsController < ApplicationController
  def index
    # the .order below will keep the list alpha order (!)
    @songs = Song.all.order(:id)
    render json: @songs, status: :ok
  end

  def show
    @song = Song.find(params[:id])
    render json: @song, status: :ok
  end

  def new
    @song = Song.find(params[song:id])
    @setlist = Setlist.new
  end

  def create
    # @setlist = Setlist.find(params[:song_id])
    @song = Song.new(song_params)
    # Below is a method that saves (??)
    if @song.save
    # @song.setlists << @song
    render json: @song
    end
  end

  # def edit
  #   @song = Song.find(params[song_id])
  #   @setlist = Setlist.find(params[:id])
  # end

  def update
    @song = Song.find(params[:id])
    if @song.update_attributes(song_params)
      render json: @song
    end
  end

def destroy 
  @song = Song.find(params[:id])
  @song.destroy
  # render json: @song
end

private

def song_params
  params.require(:song).permit(:name, :abbreviation, :length)
end
end
