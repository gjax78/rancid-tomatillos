import React, { Component } from 'react'
import './FeatureDisplay.css'

class FeatureDisplay extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }

  render() {
    return (
      <section className='featureDisplay'>
        <h1>Rancid Tomatillos</h1>
        <h3>Rogue</h3>
        <img className='featureImage'src='https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg' alt='background image for Rogue movie' />
      </section>
    )
  }
}

export default FeatureDisplay
