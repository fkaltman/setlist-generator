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

  componentDidMount = async () => {
   this.getRandos()
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
      <div className="rando-lists-page">
        <div className="generate-songs-text-header">
          {/* <h1>How about this set list?</h1> */}
          {/* <h2>Rearrange songs below...</h2> */}
        </div>
        <div className="two-rando-sets">
        {this.state.tempSetlist && (
          <>
            <div className="set-one">
              <h1 className="set-one-title">Set 1:</h1>
            {this.state.tempSetlist.set1.map(song =>
              <div className="info" key={song.id}>
                <h3>{song.abbreviation}   {song.length}</h3>
              </div>
            )
          }
          </div>
            <div className="set-two">
              <h1 className="set-two-title">Set 2:</h1>
            {this.state.tempSetlist.set2.map(song =>
              <div className="info2" key={song.id}>
                <h3>{song.abbreviation}  {song.length}</h3>
              </div>
            )}
              </div>
          </>
        )}
        </div>
        {/* <button className="add-a-song-to-the-list-button" onClick={this.getRandos}> Get a different random list </button> */}

      </div>
    )
  }
}
