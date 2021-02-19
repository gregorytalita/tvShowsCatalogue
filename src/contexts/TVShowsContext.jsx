import { createContext, useContext } from 'react'

const TVShowsContext = createContext({
  showsByGenre: {}
})

export const useTVShowsContext = () => useContext(TVShowsContext)

export default TVShowsContext
