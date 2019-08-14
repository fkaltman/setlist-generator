import React from 'react'

export default function OneSongBox(props) {
  return (
    <>
      <div className="song-text">{props.song.name}</div>
      <div className="abbrev-text">{props.song.abbreviation}</div>
      <div className="song-length">{props.song.length}</div><br />
      {/* Edit songs button */}
      <div><button className="song-edit-button" onClick={() => {
        props.setFormData(props.song)
        props.setEdit(props.song.id)
      }}>Edit</button></div>
      {/* Delete Songs button */}
      <div><button className="song-delete-button" onClick={() => {
        props.removeSong(props.song.id)
      }}>Delete</button></div>
    </>
  )
}
