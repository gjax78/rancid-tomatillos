import React from 'react';
import './MovieInfo.css';
import movieData from './movieData';


const MovieInfo = () => {
    return (
        <section className='single-view'>
          <img className='movie-background' src='' alt=''/>
          <h2>fuckit</h2>
          <p>{movieData.release_date}</p>
          <p>a</p>
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
