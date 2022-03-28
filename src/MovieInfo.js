import React from 'react';
import './MovieInfo.css';

const MovieInfo = ({ movie, showAllMovies }) => {
    return (
      <div>

        <section className='single-movie-feature-display'>
          <img
            className="movie-backdrop"
            src={movie.backdrop_path}
            alt={'current movie backdrop'}
          />
          <p className='movie-tagline'>{movie.tagline}</p>
          <p className='movie-genres-and-release-date'>{movie.genres} · {movie.release_date.split('-')[0]}</p>
          <button onClick={() => showAllMovies()}>Back</button>
          <h2 className='movie-title'>{movie.title}</h2>
        </section>


        <section className='single-view'>
          <div className='movie-info-container'>
            <img className='movie-poster'
              src={movie.poster_path}
              alt={'current movie poster'}
            />
            <div className='movie-info'>
              <p className='information-title'>Information</p>
              <p className='movie-titles'>Release Date</p>
              <p className='movie-release-date'>{movie.release_date}</p>
              <p className='movie-titles'>Average Rating</p>
              <p className='movie-average-rating'>{movie.average_rating.toFixed(1)}</p>
              <p className='movie-titles'>Average Runtime</p>
              <p className='movie-runtime'>{movie.runtime}</p>
              <p className='movie-titles'>Genres</p>
              <p className='movie-runtime'>{movie.genres}</p>
            </div>
            <div className='movie-overview-container'>
              <p className='overview-title'>About</p>
              <p className='movie-overview'>{movie.overview}</p>
            </div>
          </div>
        </section>

      </div>
    )
  }

export default MovieInfo;
