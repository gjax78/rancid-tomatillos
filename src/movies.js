import React from 'react'
import MovieCard from './movieCard'
import './movies.css'
import MovieInfo from './MovieInfo'


const Movies = ({ movieData }) => {
  const movieCards = movieData.map(movie => {
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
