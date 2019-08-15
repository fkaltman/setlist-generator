import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className="big-title">Setlist Generator</h1>
      <img className="typewritter" src="" />
      {/* <div className="home-buttons">
        <button className="home-generate-a-list-button" onClick={() => { }}>Generate a New Setlist</button>
        <br />
        <Link to='/setlist-archives'>
          <button className="home-go-to-archives-button">Setlist Archives</button>
        </Link>
        <Link to='/songs-masterlist'>
          <button className="home-go-songs-masterlist-button">Songs Masterlist</button>
        </Link>
      </div> */}

    </div>
  )
}
