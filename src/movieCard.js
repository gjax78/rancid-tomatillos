import React from 'react'
import movieData from './movieData'

const MovieCard = ({ id, title, poster_path }) => {
  return (
    <div className='movieCard'>
      <img src={poster_path} alt={title}/>
    </div>
  )
}

export default MovieCard
