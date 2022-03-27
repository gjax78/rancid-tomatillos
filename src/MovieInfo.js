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
          <h2 className='movie-title'>{movie.title}</h2>
        </section>


        <section className='single-view'>
          <div className='movie-info-container'>
            <img className='movie-poster'
              src={movie.poster_path}
              alt={'current movie poster'}
            />
            <div className='movie-info'>
              <p className='movie-release-date'>{movie.release_date}</p>
              <p className='movie-average-rating'>{movie.average_rating}</p>
              <p className='movie-budget'>{movie.budget}</p>
              <p className='movie-revenue'>{movie.revenue}</p>
              <p className='movie-runtime'>{movie.runtime}</p>
            </div>
            <div className='movie-overview-container'>
              <p className='movie-overview'>{movie.overview}</p>
            </div>
          </div>
        </section>
        <button onClick={() => showAllMovies()}>BACK</button>

      </div>
    )
  }

export default MovieInfo;
