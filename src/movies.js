import React from 'react'
import MovieCard from './movieCard'
import './movies.css'
import movieData from './movieData'

const Movies = ({ movieData }) => {
  const movies = movieData[0].movies

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster_path={movie.poster_path}
        id={movie.id}
        key={movie.id}
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
