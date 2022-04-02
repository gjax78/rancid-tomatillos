import React from 'react'
import spinner from '../Spinner/Spinner.gif'
import './Spinner.css'

const Spinner = () => {
  return (
    <img
    className='spinner'
    src={spinner}
    alt='Loading'
    />
  )
}

export default Spinner
