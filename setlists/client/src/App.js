import React from 'react';
import './App.css';
import { fetchSongs, createSong, fetchSong, deleteSong, editSong } from './services/api-helper';
import Home from './components/Home';
import SongsMasterList from './components/SongsMasterList';
import SongCreateForm from './components/SongCreateForm';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      setlists: [],
      formData: {
        name: "",
        abbreviation: "",
        length: ""
      },
      // below line holds the id of the song while the user updates it
      updatingId: null
    }
  }

  songCreateHandleSubmit = async (songData) => {
    // taking in the form data from songCreateForm
    // and passing it to create song
    const newSong = await createSong(songData);
    // below line added with MS, to handle the new try/catch api syntax
    if (newSong) {
      this.setState((prevState) => ({
        // line below unpacks songs and replaces it with newSong
        songs: [...prevState.songs, newSong],
      }));
    }
    this.setState({
      formData: {
        name: "",
        abbreviation: "",
        length: ""
      }
    })
  }

  songUpdateHandleSubmit = async (songData) => {
    const { id, ...data } = songData;
    const updateSong = await editSong(id, data)
    this.setState((prevState) => ({
      songs: prevState.songs.map(song => id === song.id ? updateSong : song)
    }))
  }

  removeSong = async (id) => {
    await deleteSong(id);
    this.setState((prevState) => ({
      // Below filters through the songss array and compairs if the one
      // it is given is equal to all of the ids in the array
      songs: prevState.songs.filter(song => id !== song.id)
    }))
  }


  // Identical to the other handleChange
  handleChange = (e) => {
    // Deconstructs e.target.name & e.target.value
    // (pulls them out and makes them their own variables)
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

  componentDidMount = async () => {
    const currentSongs = await fetchSongs();
    this.setState({
      songs: currentSongs
    })
  }

  // Set the form data to the selected song and store its id
  setFormData = (id) => {
    const currentSong = this.state.songs.find(song => song.id === id)
    this.setState({
      formData: currentSong,
      updatingId: id
    })
  }

  render() {
    return (
      <div>
        {/* <Home /> */}
        <SongCreateForm
          songCreateHandleSubmit={this.songCreateHandleSubmit}
        />
        <SongsMasterList
          // Below two lines are passing data, note the presence of "state"
          // compaired to the methods below them
          songs={this.state.songs}
          formData={this.state.formData}
          // Below is how we pass in a method that is defined in this component
          removeSong={this.removeSong}
          handleChange={this.handleChange}
          // Below is passing updateSong to SongsMasterList
          setFormData={this.setFormData}
          songUpdateHandleSubmit={this.songUpdateHandleSubmit}
        />
      </div>
    )
  }
}


