import React, { Component } from 'react'
// include curly brakets as below when importing only one thing
import { getRandomSong, getOneRandomSong } from '../services/api-helper';
import Segno from '../assets/segno.png';
import X from '../assets/x.png';

export default class GenerateSetlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setOne: [],
      setTwo: []
    }
  }

  componentDidMount = async () => {
    this.getRandos()
  }

  getOneSong1 = async () => {
    let newSong = await getOneRandomSong()
    this.setState(prevState => ({
      setOne: [...prevState.setOne, newSong]
    }))
  }

  getOneSong2 = async () => {
    let newSong = await getOneRandomSong()
    this.setState(prevState => ({
      setTwo: [...prevState.setTwo, newSong]
    }))
  }

  getRandos = async () => {
    const randomList = await getRandomSong();
    this.setState({
      setOne: randomList.set1,
      setTwo: randomList.set2
    })
  }

  removeGeneratedSong1 = async (id) => {
    this.setState((prevState) => ({
      setOne: [...prevState.setOne.filter(song => id !== song.id)]
    }))
  }

  removeGeneratedSong2 = async (id) => {
    this.setState((prevState) => ({
      setTwo: [...prevState.setTwo.filter(song => id !== song.id)]
    }))
  }

  render() {
    return (
      <div className="rando-lists-page">
        <img className="segno-image" src={Segno} alt="home button" onClick={this.props.segnoHandleSubmit} />
        <div className="two-rando-sets">
          {this.state.setOne && (
            <>
              <div className="set-one">
                <h1 className="set-one-title">Set 1:</h1><hr />
                {this.state.setOne.map(song =>
                  <div className="info" key={song.id}>
                    <div className="songs-and-times">
                      <div className="s-abbrev">{song.abbreviation}
                      </div>
                      <div className="s-length"> {song.length}
                      </ div>
                      <img className="x" src={X} alt="remove" onClick={() => {
                        this.removeGeneratedSong1(song.id)
                      }} />
                    </div>
                  </div>
                )}
                <p>{Math.ceil(this.state.setOne.reduce((sum, song) => sum + song.length, 0))}</p>
                <button className="add-random-song" onClick={() => {
                  this.getOneSong1()
                }}>Add a song</button>

              </div>
              <div className="set-two">
                <h1 className="set-two-title">Set 2:</h1><hr />
                <div className="set-songs">
                  {this.state.setTwo.map(song =>
                    <div className="info" key={song.id}>
                      <div className="songs-and-times">
                        <div className="s-abbrev">{song.abbreviation}
                        </div>
                        <div className="s-length"> {song.length}
                        </div>
                        <img className="x" src={X} alt="remove" onClick={() => {
                          this.removeGeneratedSong2(song.id)
                        }} />
                      </div>
                    </div>
                  )}
                </div>
                <p>{Math.ceil(this.state.setTwo.reduce((sum, song) => sum + song.length, 0))}</p>
                <button className="add-random-song" onClick={() => {
                  this.getOneSong2()
                }}>+<br />song</button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}
