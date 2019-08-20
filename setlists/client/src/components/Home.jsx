import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../assets/typewriter_nw_700.png';


export default function Home() {
  return (
    <div className="homepage">
      <p className="line-1 anim-typewriter">Setlist Generator</p>
      <div className="home-links">
        <Link to='/generate-setlist'>
          <button className="home-generate-a-list-button" onClick={() => { }}>Generate a New Setlist</button></Link>
        <br />
        <Link to='/setlist-archives'>
          <button className="home-go-to-archives-button">Setlist Archives</button>
        </Link><br />
        <Link to='/songs-masterlist'>
          <button className="home-go-songs-masterlist-button">Songs Masterlist</button>
        </Link>
      </div>
      <div className="typewriter"><img src={Typewriter} alt="typewriter" /></div>
</div>
  )
}