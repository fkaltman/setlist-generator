import React, { Component } from 'react'

export default class GenerateSetlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempSetlist: ''
    }
}


  render() {
    return (
      <div>
        <h2>Rearrange songs below...</h2> 
        <button className="add-a-song-to-the-list-button"> Add a new song </button>
      </div>
    )
  }
}
