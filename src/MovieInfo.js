import React, {Component} from 'react';
import './MovieInfo.css';


class MovieInfo extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <section className='single-view'>
        <img className='movie-background' src='' alt=''/>
        <h2>movie title</h2>
        <p>release date</p>
        <p>avg rating</p>
        <p>budget</p>
        <p>revenue</p>
        <p>runtime</p>
        <p>genre</p>
        <p>tagline</p>
        <p>overview</p>
      </section>
    )
  }
}

export default MovieInfo;
