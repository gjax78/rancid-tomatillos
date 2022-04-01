const apiData = {
  allMovieData(url) {
    return fetch(url)
    .then(response => {
      if(!response.ok) {
        if(response.status >= 500) {
            throw new Error(`This content is no longer available.`)
          } else if (response.status === 404) {
            throw new Error(`Cannot load page. Please try again.`)
          } else {
            throw new Error(`Please reload the page.`)
          }
        } else {
        return response.json()
      }
    })
  }
}

export default apiData;
