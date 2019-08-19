import React, { Component } from 'react'
// include curly brakets as below when importing only one thing
import { getRandomSong } from '../services/api-helper';
import Segno from '../assets/segno.png';
import X from '../assets/x.png';

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
        <img className="segno-image" src={Segno} alt ="home button"/>
        <div className="generate-songs-text-header">
        </div>
        <div className="two-rando-sets">
          {this.state.tempSetlist && (
            <>
              <div className="set-one">
                <h1 className="set-one-title">Set 1:</h1>

                {this.state.tempSetlist.set1.map(song =>
                  <div className="info" key={song.id}>
                    <h3>{song.abbreviation}  {song.length} <img className="x" src={X} alt="remove" /> </h3>
                  </div>
                )}

                <button className="add-random-song">Add a song to this set</button>
              </div>
              <div className="set-two">
                <h1 className="set-two-title">Set 2:</h1>
                {this.state.tempSetlist.set2.map(song =>
                  <div className="info2" key={song.id}>
                    <h3>{song.abbreviation}  {song.length} <img className="x" src={X} alt="remove" />
                      {/* <button className="remove-button-2">remove</button> */}
                    </h3>
                  </div>
                )}
                <button className="add-random-song">Add a song to this set</button>
              </div>
            </>
          )}
        </div>
        {/* <button className="add-a-song-to-the-list-button" onClick={this.getRandos}> Get a different random list </button> */}

      </div>
    )
  }
}
