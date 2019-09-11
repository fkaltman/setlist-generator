import React from 'react'
import Swal from 'sweetalert2';

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
        // Delete warning modal from SweetAlert2 below
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to reverse this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#81b878',
          cancelButtonColor: '#eabfbf',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            props.removeSong(props.song.id)
          }
        })
      }}>Delete</button></div>
    </>
  )
}
