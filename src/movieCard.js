import React from 'react'
import './movieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ({ id, title, poster_path}) => {
  return (
    <Link to={`/${id}`}>
      <div className='movieCard'>
        <img src={poster_path} alt={title}/>
      </div>
    </Link>
  )
}

export default MovieCard
