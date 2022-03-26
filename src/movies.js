import React from 'react'
import MovieCard from './movieCard'
import './movies.css'
import apiData from './apiCalls'
import MovieInfo from './MovieInfo'

const Movies = ({ apiData.allMovieData(), showSingleMovie }) => {
  const movieCards = apiData.allMovieData().map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster_path={movie.poster_path}
        id={movie.id}
        key={movie.id}
        showSingleMovie={showSingleMovie}
      />
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies
