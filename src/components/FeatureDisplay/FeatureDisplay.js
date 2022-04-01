import React, { Component } from 'react'
import './FeatureDisplay.css'

const FeatureDisplay = ({ movieData }) => {
  return (
      <section className='featureDisplay'>
        <img className='featureImage' src={movieData.backdrop_path} alt='background image for Away movie' />
        <h1>Rancid Tomatillos</h1>
        <h3>{movieData.title}</h3>
        </section>
  )
}

export default FeatureDisplay;
