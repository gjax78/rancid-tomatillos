import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'
import MovieInfo from '../MovieInfo/MovieInfo'


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
