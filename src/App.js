// import logo from './logo.svg';
import './App.css';
import movieData from './movieData'
import MovieCard from './movieCard'
import Movies from './movies'
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [movieData]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Movies movieData={this.state.movieData}/>
      </main>
    )
  }
}


export default App;
