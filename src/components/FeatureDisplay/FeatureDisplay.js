import React, { Component } from 'react'
import './FeatureDisplay.css'
import apiData from '../../apiCalls'


class FeatureDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featureMovie: '',
      featureVideo: '',
      error: '',
      showVideo: false
    }
  }

  componentDidMount = () => {
    apiData.allMovieData('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
    .then(data => this.setState({
      movieData: data.movies,
      featureMovie: data.movies[Math.floor(Math.random() * data.movies.length)],
    }))
    .catch((error) => {
      this.setState({error: error})
    })
      setTimeout(() => {
        apiData.allMovieData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.featureMovie.id}/videos`)
          .then(data => {
            data.videos.find(video => {
              if (video.type === 'Trailer') {
                return this.setState({featureVideo: video.key})
              }
            })
          })
          .catch((error) => {
            this.setState({error: error})
          })
      }, 500)
  }

  showVideo = () => {
    if(this.state.featureVideo) {
    setTimeout(() => {
      this.setState({ featureMovie: '', showVideo: true})
    }, 6000)
      }
  }

  render() {
    {this.showVideo()}
    return (
      !this.state.showVideo ?
      <section className='featureDisplay'>
        <img className='featureImage' src={this.state.featureMovie.backdrop_path} alt={`background image for ${this.state.featureMovie.title} movie`} />
        <h1>Rancid Tomatillos</h1>
        <h3>{this.state.featureMovie.title}</h3>
      </section> :
      <section className='featureDisplay'>
      <h1>Rancid Tomatillos</h1>
      <h3>{this.state.featureMovie.title}</h3>
      <iframe
      className='trailer'
      title='watch-trailer'
      width='854'
      height='480'
      src={`https://www.youtube.com/embed/${this.state.featureVideo}?autoplay=1&mute=1`}>
        </iframe>
        </section>
      )
  }
}

export default FeatureDisplay;
