import React from 'react'
import './movieCard.css'

const MovieCard = ({ id, title, poster_path, showSingleMovie}) => {
  return (
    <div
    className='movieCard'
    onClick={() => showSingleMovie(id)}
    >
      <img src={poster_path} alt={title}/>
    </div>
  )
}

export default MovieCard
