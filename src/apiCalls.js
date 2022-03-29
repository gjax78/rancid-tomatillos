const apiData = {
  allMovieData() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`)
    .then(response => {
      if(!response.ok) {
        throw new Error('Error')
      } else {
        return response.json()
      }
    })
  },
  singleMovieData(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(!response.ok) {
        throw new Error('Refresh browser')
      } else {
        return response.json()
      }
    })
  }
}

export default apiData;
