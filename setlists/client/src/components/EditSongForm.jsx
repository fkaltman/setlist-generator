import React, { Component } from 'react'

export default class EditSongForm extends Component {

  render() {
    return (
      <div className="add-song-form">
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.songUpdateHandleSubmit(this.props.formData)
        this.props.resetEdit()
        }}
        className="edit-form">
        <input className="edit-song-input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.props.handleChange}
          // formData could be anything
          value={this.props.formData.name}
        /> <br />
        <input className="edit-abbrev-input"
          type="text"
          placeholder="Abbreviation"
          name="abbreviation"
          onChange={this.props.handleChange}
          value={this.props.formData.abbreviation}
        />
        <input className="edit-length-input"
          type="string"
          placeholder="Length"
          name="length"
          onChange={this.props.handleChange}
          value={this.props.formData.length}
        />
        <button className="edit-save-song-button">Save</button>
        </form>
        </div>
    )
  }
}
