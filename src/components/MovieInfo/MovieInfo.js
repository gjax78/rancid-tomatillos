import React, { Component } from 'react'
import './MovieInfo.css'
import { Link } from 'react-router-dom'
import apiData from '../../apiCalls'
import ErrorDisplay from '../Error/Error'


class MovieInfo extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedMovie: '',
      error: ''
    }
  }

  componentDidMount() {
    const singleMovie = apiData.allMovieData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    .then(movie => this.setState({selectedMovie: movie.movie}))
    .catch((error) => {
      this.setState({error: error})
    })
  }

  getInfo(info) {
    return this.state.selectedMovie[info]
  }

  render() {
    let movieYear = new Date(this.state.selectedMovie.release_date);
    movieYear = movieYear.getFullYear();

    let genres = this.state.selectedMovie.genres?.join(' · ')

    let averageRating = this.state.selectedMovie.average_rating?.toFixed(1)

    if (this.state.error) {
      return (
        <div className='error-main'>
          <ErrorDisplay error={this.state.error} />
        </div>
      )
    } else {
    return (
      <div>
      <section className='single-movie-feature-display'>
        <img
          className="movie-backdrop"
          src={this.getInfo('backdrop_path')}
          alt={'current movie backdrop'}
        />
        <p className='movie-tagline'>{this.getInfo('tagline')}</p>
        <p className='movie-genres-and-release-date'>{genres} · {movieYear}</p>
        <Link to='/'>
          <button className='back' onClick={this.props.showAllMovies}>Back</button>
        </Link>
      </section>


      <section className='single-view'>
        <div className='movie-info-container'>
          <img className='movie-poster'
            src={this.getInfo('poster_path')}
            alt={'current movie poster'}
          />
          <div className='information-div'>

          <p className='information-title'>Information</p>
          <div className='movie-info'>
            <p className='movie-titles'>Release Date</p>
            <p className='movie-release-date'>{movieYear}</p>
            <p className='movie-titles'>Average Rating</p>
            <p className='movie-average-rating'>{averageRating}</p>
            <p className='movie-titles'>Average Runtime</p>
            <p className='movie-runtime'>{this.getInfo('runtime')} min</p>
            <p className='movie-titles'>Genres</p>
            <p className='movie-genres'>{genres}</p>
          </div>
          </div>
          <div className='darker-div'>
            <p className='overview-title'>About</p>
            <div className='movie-overview-container'>
            <h2 className='movie-title'>{this.getInfo('title')}</h2>
              <p className='movie-overview'>{this.getInfo('overview')}</p>
              <span class="badge">TV-MA</span>
              <span class="badge">CC</span>
              <span class="badge">AD</span>
              <span class="badge">SDH</span>
              <span class="badge">4K</span>
            </div>
          </div>
        </div>
      </section>
      <section className='copyright'>
        <p className='copyright-title'>Copyright 2022 Rancid Tomatillos Inc. All rights reserved.</p>
        <p className='links'>Service Teams <span style={{opacity: .6}}>|</span> Rancid Tomatillo TV & Privacy <span style={{opacity: .6}}>|</span> Cookies <span style={{opacity: .6}}>|</span> Support</p>
      </section>
      </div>
      )
    }
  }
}

export default MovieInfo;
