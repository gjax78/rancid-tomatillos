import React, { Component } from 'react';
import './MovieInfo.css';
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
          <p className='movie-genres-and-release-date'>{this.getInfo('genres')} · {this.getInfo('release_date')}</p>
          <Link to='/'>
            <button className='back' onClick={this.props.showAllMovies}>Back</button>
          </Link>
         <h2 className='movie-title'>{this.getInfo('title')}</h2>
        </section>


       <section className='single-view'>
         <div className='movie-info-container'>
           <img className='movie-poster'
             src={this.getInfo('poster_path')}
             alt={'current movie poster'}
           />
           <div className='movie-info'>
             <p className='information-title'>Information</p>
             <p className='movie-titles'>Release Date</p>
             <p className='movie-release-date'>{this.getInfo('release_date')}</p>
             <p className='movie-titles'>Average Rating</p>
             <p className='movie-average-rating'>{this.getInfo('average_rating')}</p>
             <p className='movie-titles'>Average Runtime</p>
             <p className='movie-runtime'>{this.getInfo('runtime')}</p>
             <p className='movie-titles'>Genres</p>
             <p className='movie-genres'>{this.getInfo('genres')}</p>
           </div>
           <div className='movie-overview-container'>
             <p className='overview-title'>About</p>
             <p className='movie-overview'>{this.getInfo('overview')}</p>
           </div>
         </div>
       </section>

       </div>
     )
    }
   }
  }

export default MovieInfo;
