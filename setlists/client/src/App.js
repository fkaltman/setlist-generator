import React from 'react';
import './App.css';
import Home from './components/Home';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      setlists: [],
    }
  }
   

    render() {
      return (
        <div>
          <Home />
        </div>
      )
    }
  }
  

