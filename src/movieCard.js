import React from 'react'
import movieData from './movieData'
import './movieCard.css'

const MovieCard = ({ id, title, poster_path, handleChange}) => {
  return (
    <div
    className='movieCard'
    onClick={() => handleChange(id)}
    >
      <img src={poster_path} alt={title}/>
    </div>
  )
}

export default MovieCard
