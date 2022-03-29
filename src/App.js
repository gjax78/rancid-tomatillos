import './App.css';
import apiData from './apiCalls'
import MovieCard from './movieCard'
import Movies from './movies'
import React, { Component } from 'react'
import Header from './Header'
import FeatureDisplay from './FeatureDisplay'
import MovieInfo from './MovieInfo'
import ErrorDisplay from './Error'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [],
      selectedMovie: null,
      featureMovie: '',
      error: ''
    }
  }

  componentDidMount = () => {
    apiData.allMovieData()
    .then(data => this.setState({
      movieData: data.movies,
      featureMovie: data.movies[Math.floor(Math.random() * data.movies.length)]}))
    .catch((error) => {
      this.setState({error: error})
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
    this.setState({
      selectedMovie: null,
      featureMovie: this.state.movieData[Math.floor(Math.random() * this.state.movieData.length)] })
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <Route
          path="/"
          render={() => {
            return (
              <>
              <FeatureDisplay movieData={this.state.featureMovie} />
              <Movies movieData={this.state.movieData} showSingleMovie={this.showSingleMovie}/>
              </>
            )
          }}
        />
        <ErrorDisplay error={this.state.error} />
        </main>
      )
    }
  }


        // {!this.state.selectedMovie ? <FeatureDisplay movieData={this.state.featureMovie}/> : null}
        // {this.state.selectedMovie ? <MovieInfo movie={this.state.selectedMovie}
        // showAllMovies={this.showAllMovies}/> :
        // <Movies
        // movieData={this.state.movieData}
        // showSingleMovie={this.showSingleMovie}
        // /> }


export default App;
