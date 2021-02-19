import { API, ENDPOINTS } from '../constants/api'

export const searchShows = (search = '') => {
  return fetch(`${API}${ENDPOINTS.SEARCH_SHOWS}?q=${search}`)
    .then(res => res.json())
}
