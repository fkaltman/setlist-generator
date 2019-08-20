import React, { Component } from 'react'
// include curly brakets as below when importing only one thing
import { getRandomSong, getOneRandomSong } from '../services/api-helper';
import Segno from '../assets/segno.png';
import X from '../assets/x.png';

export default class GenerateSetlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempSetlist: null,
      newTempSong1: "",
      newTempSong2: ""
    }
  }

  componentDidMount = async () => {
    this.getRandos()

  }

  getOneSong1 = async () => {
    let newSong = await getOneRandomSong()
    this.setState(prevState => ({
      // newTempSong is from state and newSong is from the line above
      newTempSong1: newSong
    }))
  }

  deleteOneSong1 = (ev) => {
    ev.preventDefault();
    this.setState({
      // newTempSong is from state and newSong is from the line above
      newTempSong1: ""
    })
  }

  getOneSong2 = async () => {
    let newSong = await getOneRandomSong()
    this.setState({
      // newTempSong is from state and newSong is from the line above
      newTempSong2: newSong
    })
  }

  getRandos = async () => {
    const randomList = await getRandomSong();
    this.setState({
      tempSetlist: randomList
    })
    console.log(randomList)
  }


  removeGeneratedSong = async (id, setlist) => {
    this.setState((prevState) => ({
      // Below filters through the songs array and compairs if the one
      // that is given is equal to all of the ids in the array
      // AND sets it in state
      tempSetlist: {
        ...prevState.tempSetlist,
        [setlist]: prevState.tempSetlist[setlist].filter(song => id !== song.id)
      }
    }))
  }

  render() {
    return (
      <div className="rando-lists-page">
        <img className="segno-image" src={Segno} alt="home button" onClick={this.props.segnoHandleSubmit} />
        <div className="two-rando-sets">
          {this.state.tempSetlist && (
            <>
              <div className="set-one">
                <h1 className="set-one-title">Set 1:</h1>
                {/* class below will most likely be removed - superflouos */}
                <div className="set-songs">
                  {this.state.tempSetlist.set1.map(song =>
                    <div className="info" key={song.id}>
                      <div className="songs-and-times">{song.abbreviation}  {song.length} <img className="x" src={X} alt="remove" onClick={() => { this.removeGeneratedSong(song.id, "set1") }} /> </div>
                    </div>
                  )}
                </div>
                {this.state.newTempSong1 &&
                  <div className="songs-and-times">
                    {this.state.newTempSong1.abbreviation} {this.state.newTempSong1.length}
                    {this.state.newTempSong1 &&
                      <img className="x" src={X} alt="remove" onClick={this.deleteOneSong1} />}
                  </div>}

                <button className="add-random-song" onClick={() => { this.getOneSong1() }}>Add a song to this set</button>
              </div>
              <div className="set-two">
                <h1 className="set-two-title">Set 2:</h1>
                <div className="set-songs">
                  {this.state.tempSetlist.set2.map(song =>
                    <div className="info2" key={song.id}>
                      <div className="songs-and-times">{song.abbreviation}  {song.length} <img className="x" src={X} alt="remove" onClick={() => { this.removeGeneratedSong(song.id, "set2") }} />
                      </div>
                    </div>
                  )}
                  {this.state.newTempSong2 &&
                    <div className="songs-and-times">
                      {this.state.newTempSong2.abbreviation} {this.state.newTempSong2.length}
                    </div>}
                </div>
                <button className="add-random-song" onClick={() => { this.getOneSong2() }}>Add a song to this set</button>
              </div>
            </>
          )}
        </div>
        {/* <button className="add-a-song-to-the-list-button" onClick={this.getRandos}> Get a different random list </button> */}

      </div>
    )
  }
}
