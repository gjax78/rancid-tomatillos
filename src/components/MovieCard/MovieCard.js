import React from 'react'
import './MovieCard.css'
import PropTypes from 'prop-types';
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

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired
}
