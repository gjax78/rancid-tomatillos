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
      <div>
      <MovieCard
        title={movie.title}
        poster_path={movie.poster_path}
        id={movie.id}
        key={movie.id}
        handleChange={handleChange}
      />
      </div>
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
      <a href="#section1" class="arrow__btn right-arrow">›</a>
    </div>
  )
}

export default Movies
