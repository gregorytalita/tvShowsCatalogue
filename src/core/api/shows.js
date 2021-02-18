import { API, ENDPOINTS } from '../constants/api'

export const getShows = () => {
  return fetch(`${API}${ENDPOINTS.SHOWS}`)
    .then(res => res.json())
}