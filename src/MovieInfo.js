import React, { Component } from 'react';
import './MovieInfo.css';
import { Link } from 'react-router-dom'
import apiData from './apiCalls'

class MovieInfo extends Component {
  constructor() {
    super()
    this.state = {
      selectedMovie: '',
    }
  }
  
    componentDidMount() {
      const singleMovie = apiData.allMovieData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(movie => this.setState({selectedMovie: movie.movie}))
      .catch((error) => {
        this.setState({error: error})
      })
    }

   render() {
     return (
       <div>

       <section className='single-movie-feature-display'>
       <img
       className="movie-backdrop"
       src={this.state.selectedMovie.backdrop_path}
       alt={'current movie backdrop'}
       />
       <p className='movie-tagline'>{this.state.selectedMovie.tagline}</p>
       <p className='movie-genres-and-release-date'>{this.state.selectedMovie.genres} · {this.state.selectedMovie.release_date}</p>
       <Link to='/'>
       <button onClick={this.props.showAllMovies}>Back</button>
       </Link>
       <h2 className='movie-title'>{this.state.selectedMovie.title}</h2>
       </section>


       <section className='single-view'>
       <div className='movie-info-container'>
       <img className='movie-poster'
       src={this.state.selectedMovie.poster_path}
       alt={'current movie poster'}
       />
       <div className='movie-info'>
       <p className='information-title'>Information</p>
       <p className='movie-titles'>Release Date</p>
       <p className='movie-release-date'>{this.state.selectedMovie.release_date}</p>
       <p className='movie-titles'>Average Rating</p>
       <p className='movie-average-rating'>{this.state.selectedMovie.average_rating}</p>
       <p className='movie-titles'>Average Runtime</p>
       <p className='movie-runtime'>{this.state.selectedMovie.runtime}</p>
       <p className='movie-titles'>Genres</p>
       <p className='movie-runtime'>{this.state.selectedMovie.genres}</p>
       </div>
       <div className='movie-overview-container'>
       <p className='overview-title'>About</p>
       <p className='movie-overview'>{this.state.selectedMovie.overview}</p>
       </div>
       </div>
       </section>

       </div>
     )
   }
  }

export default MovieInfo;
