const apiData = {
  allMovieData() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    }
}

export default apiData;