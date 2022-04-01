import './App.css';
import apiData from '../../apiCalls'
import MovieCard from '../MovieCard/MovieCard'
import Movies from '../Movies/Movies'
import React, { Component } from 'react'
import Header from '../Header/Header'
import FeatureDisplay from '../FeatureDisplay/FeatureDisplay'
import MovieInfo from '../MovieInfo/MovieInfo'
import ErrorDisplay from '../Error/Error'
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
    apiData.allMovieData('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
    .then(data => this.setState({
      movieData: data.movies,
      featureMovie: data.movies[Math.floor(Math.random() * data.movies.length)]}))
    .catch((error) => {
      this.setState({error: error})
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
          exact path="/"
          render={() => {
            return (
              <>
                <FeatureDisplay movieData={this.state.featureMovie} />
                <Movies movieData={this.state.movieData} />
              </>
            )
          }}
        />
        <Route
          exact path="/:id"
          render={({ match }) => {
            return (
              <MovieInfo
                movie={this.state.selectedMovie}
                showAllMovies={this.showAllMovies}
                id={match.params.id}/>
            )
          }}
          />
          {this.state.error && <ErrorDisplay error={this.state.error} /> }
        </main>
      )
    }
  }

export default App;
