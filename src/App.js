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

  // randomize = () => {
  //   console.log(this.state.movieData)
  //   const randomIndex = Math.floor(Math.random() * this.state.movieData.length);
  //   const selectedPicture = this.state.movieData[randomIndex]
  //   // return selectedPicture
  //   this.setState({ movieData: selectedPicture })
  //   // console.log(this.state.movieData)
  // }

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
      // console.log(movieData)
      <main className='App'>
        <Header />
        {!this.state.selectedMovie ? <FeatureDisplay movieData={this.state.movieData}/> : null}
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
