// import logo from './logo.svg';
import './App.css';
import movieData from './movieData'
import MovieCard from './movieCard'
import Movies from './movies'
import React, { Component } from 'react'
import Header from './Header'
import FeatureDisplay from './FeatureDisplay'
import MovieInfo from './MovieInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: movieData.movies,
      selectedMovie: null
    }
  }

  showSingleMovie = (id) => {
    const singleMovie = this.state.movieData.find(movie => {
      return movie.id === id
    })
    this.setState({selectedMovie: singleMovie})
  }

  showAllMovies = () => {
    this.setState({ selectedMovie: null })
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <FeatureDisplay />
        {this.state.selectedMovie ? <MovieInfo movie={this.state.selectedMovie}/> :
        <Movies
        movieData={this.state.movieData}
        showSingleMovie={this.showSingleMovie}
        /> }
      </main>
    )
  }
}


export default App;
