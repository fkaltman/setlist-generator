import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../assets/typewritercropped.png';


export default function Home() {
  return (
    <div className="homepage">
      <p className="line-1 anim-typewriter">Setlist generator...</p>
      {/* <h1 className="big-title">Setlist Generator</h1> */}
      {/* <img className="typewriter" src={Typewriter} alt="typewriter" /> */}
      <div className="home-buttons">
        <Link to='/generate-setlist'>
          <button className="home-generate-a-list-button" onClick={() => { }}>Generate a New Setlist</button></Link>
        <br />
        <Link to='/setlist-archives'>
          <button className="home-go-to-archives-button">Setlist Archives</button>
        </Link>
        <Link to='/songs-masterlist'>
          <button className="home-go-songs-masterlist-button">Songs Masterlist</button>
        </Link>
      </div>
    
</div>
  )
}
