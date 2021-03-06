import axios from 'axios';

// const baseURL = "http://localhost:3000/"
const baseURL = "https://floating-cove-34332.herokuapp.com/"


// ------------------setlist api calls----------------------- //


export const fetchSetlists = async () => {
  const response = await axios.get(`${baseURL}setlists`)
  console.log(response);
  return response.data
};

export const fetchSetlist = async (id) => {
  const response = await axios.get(`${baseURL}setlists/${id}`)
  return response.data
};

export const createSetlist = async (setlistData) => {
  const response = await axios.post(`${baseURL}setlists`, setlistData)
  return response.data
};

export const deleteSetlist = async (id) => {
  const response = await axios.delete(`$baseURL}zoos/${id}`)
  return response.data
};

export const editSetlist = async (id, updateSetlist) => {
  const response = await axios.put(`${baseURL}setlists/${id}`, { setlists: updateSetlist })
  return response.data
};


// ------------------song api calls----------------------- //

export const fetchSongs = async () => {
  const response = await axios.get(`${baseURL}songs`)
  return response.data
};

export const fetchSong = async (id) => {
  const response = await axios.get(`${baseURL}song/${id}`)
  return response.data
};

export const createSong = async (songData) => {
  try {
    const response = await axios.post(`${baseURL}songs`, songData)
    return response.data
  } catch (error) {
    console.log(error.response)
    return false
  }
};

export const deleteSong = async (id) => {
  const response = await axios.delete(`${baseURL}songs/${id}`)
  return response.data
};

export const editSong = async (id, updateSong) => {
  const response = await axios.put(`${baseURL}songs/${id}`, { song: updateSong })
  return response.data
};

// ------------------random song & list api calls----------------------- //

export const getRandomSong = async () => {
  const response = await axios.get(`${baseURL}randomSongLists`)
  return response.data
};

export const getOneRandomSong = async () => {
  const response = await axios.get(`${baseURL}randomSong`)
  return response.data
}

