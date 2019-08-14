import React from 'react';

export default class SongsMasterList extends React.Component {
  
  
  render() {
    return (
      <div className="all-songs-map">
        {this.props.songs.map((song) => (
          <div key={song.id} className="all-songs-box">
            <div className="song-text">{song.name}</div>
            <div className="abbrev-text">{song.abbreviation}</div>
            <div className="song-length">{song.length}</div><br />
            {/* Edit songs button */}
            <div><button className="song-edit-button" onClick={() => {
              this.props.setFormData(song.id)
              this.setState({})
            }}>Edit</button></div>
            {/* Delete Songs button */}
            <div><button className="song-delete-button" onClick={() => {
              this.props.removeSong(song.id)
            }}>Delete</button></div>
          </div >
        ))
        }
      </div>
    )
  }
}