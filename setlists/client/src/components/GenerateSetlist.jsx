import React, { Component } from 'react'
// include curly brakets as below when importing only one thing
import { getRandomSong } from '../services/api-helper';

export default class GenerateSetlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempSetlist: ''
    }
  }

  getRandos = async () => {
    const lol = await getRandomSong();
    console.log(lol)
  }

  render() {
    this.getRandos()
    return (
      <div>
        <h2>Rearrange songs below...</h2>
        <button className="add-a-song-to-the-list-button"> Add a new song </button>
      </div>
    )
  }
}
