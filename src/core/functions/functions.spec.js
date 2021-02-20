import { transformIntoGenresObject, removeHTML, transformSecondsToMilliseconds } from './'

describe('transformIntoGenresObject function', () => {

  it('it should return an empty object in case [] is sent', () => {
    expect(transformIntoGenresObject([])).toEqual({})
  })

  it('it should return an object containing the genres from array as keys', () => {

    const romanceComedyShow = { id: 1, genres: ['Comedy', 'Romance']}
    const dramaShow = { id: 2, genres: ['Drama']}

    const shows = [ romanceComedyShow, dramaShow ]
    const expectedObject = {
      Comedy: [ romanceComedyShow ],
      Romance: [ romanceComedyShow ],
      Drama: [ dramaShow ]
    }

    expect(transformIntoGenresObject(shows)).toEqual(expectedObject)

  })

})

describe('removeHTML function', () => {

  it('it should remove html tags from string', () => {
    expect(removeHTML('<p>Hello world!</p>')).toEqual('Hello world!')
  })

})

describe('removeHTML function', () => {

  it('it should remove html tags from string', () => {
    expect(removeHTML('<p>Hello world!</p>')).toEqual('Hello world!')
  })

})

describe('transformSecondsToMilliseconds function', () => {

  it('it should multiply a number by 1000', () => {
    expect(transformSecondsToMilliseconds(2)).toEqual(2000)
  })

})