import React, { Component } from 'react'
// include curly brakets as below when importing only one thing
import { getRandomSong } from '../services/api-helper';

export default class GenerateSetlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempSetlist: null
    }
  }



  getRandos = async () => {
    const randomList = await getRandomSong();
    this.setState({
      tempSetlist: randomList
    })
    console.log(randomList)
  }

  render() {
    return (
      <div>
        <h2 className="generate-songs-text-header">Rearrange songs below...</h2>
        {this.state.tempSetlist && (
          <>
            <div>set 1:</div>
            {this.state.tempSetlist.set1.map(song =>
              <div className="info" key={song.id}>
                <h2>{song.abbreviation}{song.length}</h2>
              </div>
            )}
            <div>set 2:</div>
            {this.state.tempSetlist.set2.map(song =>
              <div className="info" key={song.id}>
                <h2>{song.abbreviation}  {song.length}</h2>
              </div>
            )}
          </>
        )}
        <button className="add-a-song-to-the-list-button" onClick={this.getRandos}> Get a different random list </button>

      </div>
    )
  }
}
