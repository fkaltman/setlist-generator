import React from 'react';

export default class SongsMasterList extends React.Component {
  
  
  render() {
    return (
      <div>
        {this.props.songs.map((song) => (
          <div key={song.id}>
            <h3>Abbreviation: </h3>
            <h3>{song.abbreviation}</h3>
            <h4>Song: </h4>
            <h4>{song.name}</h4>
            {/* Edit songs button */}
            <button onClick={() => {
              this.props.setFormData(song.id)
              this.setState({})
            }}>Edit</button>
            {/* Delete Songs button */}
            <button onClick={() => {
              this.props.removeSong(song.id)
            }}>Delete</button>
          </div >
        ))
        }
      </div>
    )
  }
}