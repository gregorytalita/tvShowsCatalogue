export const formatIntoGenres = (movies = []) => movies.reduce((acc = {}, curr) => {

  if(!curr.genres.length) {
    return {
      ...acc,
      'Unknown': [
        ...acc['Unknown']?.length ? acc['Unknown'] : [],
        curr
      ]
    }
  }

  return curr.genres.reduce((movieObj, genre) => ({
    ...acc,
    [genre]: [
      ...acc[genre]?.length ? acc[genre] : [],
      curr
    ]
  }), {})

}, {})

export const removeHTML = (text = '') => text?.replace( /(<([^>]+)>)/ig, '')