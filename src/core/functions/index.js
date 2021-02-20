export const formatIntoGenres = (shows = []) => shows.reduce((acc = {}, curr) => {
  if (!curr.genres.length) {
    return {
      ...acc,
      Unknown: [
        ...acc.Unknown?.length ? acc.Unknown : [],
        curr
      ]
    }
  }

  return curr.genres.reduce((showObj, genre) => ({
    ...acc,
    [genre]: [
      ...acc[genre]?.length ? acc[genre] : [],
      curr
    ]
  }), {})
}, {})

export const removeHTML = (text = '') => text?.replace(/(<([^>]+)>)/ig, '')

export const calculateGrowTimeout = time => 1000 + (time * 1000)
