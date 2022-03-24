// import logo from './logo.svg';
import './App.css';
import movieData from './movieData'
import MovieCard from './movieCard'
import Movies from './movies'
import React, { Component } from 'react'
import Header from './Header'

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
        <Header />
        <Movies movieData={this.state.movieData}/>
      </main>
    )
  }
}


export default App;
