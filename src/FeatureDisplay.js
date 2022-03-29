import React, { Component } from 'react'
import './FeatureDisplay.css'

const FeatureDisplay  = (movieData) => {
//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     movieData: this.props.movieData
//   //   }
//   // }
//
//   // randomize = () => {
//     const randomIndex = Math.floor(Math.random() * movieData.length);
//     const selectedPicture = movieData[randomIndex]
//     // return selectedPicture
//
//
//   // componentWillMount = () => {
//   //   this.randomize()
//   // this.randomize()
//   // }
//   // render() {
//     // console.log(this.state.movieData)
    return (
      <section className='featureDisplay'>
        <h3>title</h3>
        <h1>Rancid Tomatillos</h1>
        <img className='featureImage' src='' alt='background image for Away movie' />
      </section>
    )
  }
// }

//randomize should go in app.js
//pass randomize as a prop to feature featureDisplay
//set randomize to be state of feature dispaly
//this.state.backdrop_path

// randomizeFeatureDisplay = ({ movieData }) => {
  // const randomImages = movieData.movieData
  // const filteredImages = randomImages.filter(image => {
  //   return image.backdrop_path
  // })

    // console.log(randomImages)
  //
    // this.setState({ src:  selectedPicture.backdrop_path})
  // }

  // render() {
  // }
// }

export default FeatureDisplay
