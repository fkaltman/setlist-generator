import React from 'react';
import OneSongBox from './OneSongBox';
import EditSongForm from './EditSongForm';
import SongCreateForm from './SongCreateForm';
import Segno from '../assets/segno.png';

export default class SongsMasterList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEdit: null,
      formData: {
        name: "",
        abbreviation: "",
        length: ""
      }
    }
  }

  resetEdit = () => {
    this.setState({
      isEdit: null
    })
  }

  setEdit = (id) => {
    this.setState({
      isEdit: id
    })
  }

  setFormData = (song) => {
    this.setState({
      // set the formData to what the song was pre-edit
      formData: song
   })
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
      <div className="masterlist-and-add-a-song">
        <img className="segno-image" src={Segno} alt="home button" onClick={this.props.segnoHandleSubmit}/>
        <h3 className="master-songlist">Master Songlist Library</h3>
        <h4 className="master-songlist-subtitle">Scroll to view, edit and delete songs below...</h4>
        <div className="all-songs-map">
        {this.props.songs.map((song) => (
          // the line below doesn't really add functionality, the key
          // is required by react and the className is just for styling
          <div key={song.id} className="all-songs-one-box">
            {this.state.isEdit === song.id
              ?
              <EditSongForm
                // Below are all props
                formData={this.state.formData}
                handleChange={this.handleChange}
                songUpdateHandleSubmit={this.props.songUpdateHandleSubmit}
                resetEdit={this.resetEdit}
              />
              :
              <>
                {/* the first song below is used in OneSongBox.jsx */}
                < OneSongBox
                  {...this.props}
                  song={song}
                  setEdit={this.setEdit}
                  setFormData={this.setFormData}
                />
              </>
            }
          </div >
        ))
      }
        </div>
      <SongCreateForm />
    </div>
    )
  }
}