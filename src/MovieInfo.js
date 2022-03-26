import React from 'react';
import './MovieInfo.css';
// import movieData from './movieData';


const MovieInfo = ({ movie, showAllMovies }) => {
  console.log(movie)
    return (
        <section className='single-view'>
          <img className='movie-background' src={movie.poster_path} alt=''/>
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
    )
  }

export default MovieInfo;
