import React, { Component } from 'react'
import { fetchSong } from './services/api-helper';


export default class SongInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song:''
    }
  }

  grabOneSong = async(id) => {
    const data = await fetchSong(id);
    this.setState({
      song: data
    })
  }

  render() {
    return (
      <div>
        <h2>Song info goes here</h2>
        <p>{song.name}</p>
        <p>{song.lenght}</p> 
      </div>
    )
  }
}
