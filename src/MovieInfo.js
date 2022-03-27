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
        </section>


        <section className='single-view'>
          <img className='movie-poster' src={movie.poster_path} alt=''/>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.average_rating}</p>
          <p>{movie.budget}</p>
          <p>{movie.revenue}</p>
          <p>{movie.runtime}</p>
          <p>{movie.genres}</p>
          <p>{movie.tagline}</p>
          <p>{movie.overview}</p>
          <button onClick={() => showAllMovies()}>BACK</button>
        </section>

      </div>
    )
  }

export default MovieInfo;
