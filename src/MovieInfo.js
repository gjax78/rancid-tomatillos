import React from 'react';
import './MovieInfo.css';
import movieData from './movieData';


const MovieInfo = ({ movie }) => {
  console.log(movie)
    return (
        <section className='single-view'>
          <img className='movie-background' src={movie.poster_path} alt=''/>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.average_rating}</p>
          <p>budget</p>
          <p>revenue</p>
          <p>runtime</p>
          <p>genre</p>
          <p>tagline</p>
          <p>overview</p>
        </section>
    )
  }

export default MovieInfo;
