export const transformIntoGenresObject = (shows = []) => shows.reduce((acc = {}, curr) => {
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
    ...showObj,
    [genre]: [
      ...showObj[genre]?.length ? showObj[genre] : [],
      curr
    ]
  }), acc)
}, {})

export const removeHTML = (text = '') => text?.replace(/(<([^>]+)>)/ig, '')

export const transformSecondsToMilliseconds = time => time * 1000
