import './App.css';
import apiData from './apiCalls'
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
      movieData: [],
      selectedMovie: null
    }
  }

  componentDidMount = () => {
    apiData.allMovieData()
    .then(data => this.setState({movieData: data.movies}))
    .catch((error) => {
      console.log('Error:', error)
    })
  }

  showSingleMovie = (id) => {
    const singleMovie = apiData.singleMovieData(id)
    .then(movie => this.setState({selectedMovie: movie.movie}))
    .catch((error) => {
      console.log('Error:', error)
    })
  }

  showAllMovies = () => {
    this.setState({ selectedMovie: null })
  }

  render() {
    return (
      <main className='App'>
        <Header />
        {!this.state.selectedMovie ? <FeatureDisplay /> : null}
        {this.state.selectedMovie ? <MovieInfo movie={this.state.selectedMovie}
        showAllMovies={this.showAllMovies}/> :
        <Movies
        movieData={this.state.movieData}
        showSingleMovie={this.showSingleMovie}
        /> }
      </main>
    )
  }
}


export default App;
