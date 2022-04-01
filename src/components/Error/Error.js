import React from 'react'
import './Error.css'

const ErrorDisplay = ({ error }) => {
  return (
    <p className='error' >{`${error}`}</p>
  )
}

export default ErrorDisplay;
