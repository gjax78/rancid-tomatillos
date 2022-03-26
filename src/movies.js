import React from 'react'
import MovieCard from './movieCard'
import './movies.css'
import movieData from './movieData'
import MovieInfo from './MovieInfo'

const Movies = ({ movieData, handleChange }) => {
  // const movies = movieData.movies
// console.log(handleChange)
  const movieCards = movieData.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster_path={movie.poster_path}
        id={movie.id}
        key={movie.id}
        handleChange={handleChange}
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
