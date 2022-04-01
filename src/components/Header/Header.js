import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='tomato'>
        <img className='tomato' src='https://thumbs.dreamstime.com/b/delicious-single-green-tomato-isolated-black-background-clipping-path-single-green-tomato-isolated-black-background-121963520.jpg' alt='green tomato' />
      </div>
      <button className='sign-in-button'>Sign In</button>
    </header>
  )
}

export default Header;
