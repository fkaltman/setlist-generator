import React, { Component } from 'react'

export default class EditSongForm extends Component {

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.songUpdateHandleSubmit(this.props.formData)
        this.props.resetEdit()
      }}>
        <input className="song-input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.props.handleChange}
          // formData could be anything
          value={this.props.formData.name}
        /> <br />
        <input className="abbrev-input"
          type="text"
          placeholder="Abbreviation"
          name="abbreviation"
          onChange={this.props.handleChange}
          value={this.props.formData.abbreviation}
        />
        <input className="length-input"
          type="string"
          placeholder="Length"
          name="length"
          onChange={this.props.handleChange}
          value={this.props.formData.length}
        />
        <button className="save-song-button">Save</button>
      </form>
    )
  }
}
