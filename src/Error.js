import React from 'react'

const ErrorDisplay = ({ error }) => {
  let newError = 'Something went wrong'

  return (
    <p className='error'>{newError}</p>
  )
}

export default ErrorDisplay;
