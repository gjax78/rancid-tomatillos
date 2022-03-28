import React, { Component } from 'react'
import './FeatureDisplay.css'

class FeatureDisplay extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     src: []
  //   }
  // }

  // randomizeFeatureDisplay = ({ movie }) => {
  //   const randomIndex = Math.floor(Math.random() * this.state.src.length);
  //   const selectedPicture = movie[randomIndex]
  //
  //   console.log(selectedPicture)
  //
  //   this.setState({ src:  selectedPicture.backdrop_path})
  // }

  render() {
    return (
      <section className='featureDisplay'>
        <h1>Rancid Tomatillos</h1>
        <h3>Away</h3>
        <img className='featureImage' src='https://image.tmdb.org/t/p/original//ccwPF5jN09S4Cz7u6qs3T2yKOpO.jpg' alt='background image for Away movie' />
      </section>
    )
  }
}

export default FeatureDisplay
