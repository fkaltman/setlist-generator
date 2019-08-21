import React from 'react';

export default class SongCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        name: "",
        abbreviation: "",
        length: ""
      }
    }
  }

  // Identical to the other handleChange
  handleChange = (e) => {
    // Deconstructs e.target.name & e.target.value
    // (pulls them out and makes them thier own variables)
    const { name, value } = e.target
    this.setState((prevState) => ({
      formData: {
        // Keep the previous data and append the new data to the array
        ...prevState.formData,
        // below line allows a key to become a variable
        [name]: value
      }
    }))
  }


  render() {
    return (
      <div className="add-song-form">
        <h2 className="add-song-header">Add a song to the database...</h2>
        <div className="new-song-inputs">
          <form onSubmit={async (e) => {
            e.preventDefault()
            // songCreateHandleSubmit is being passed down from App.js
            // and we are giving it the form data
            await this.props.songCreateHandleSubmit(this.state.formData)
          }}>
            <input className="song-input"
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
              // formData could be anything
              value={this.state.formData.name}
            /> <br />
            <input className="abbrev-input"
              type="text"
              placeholder="Abbreviation"
              name="abbreviation"
              onChange={this.handleChange}
              value={this.state.formData.abbreviation}
            />
            <input className="length-input"
              type="string"
              placeholder="Length"
              name="length"
              onChange={this.handleChange}
              value={this.state.formData.city}
            />
            <button className="save-song-button">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

