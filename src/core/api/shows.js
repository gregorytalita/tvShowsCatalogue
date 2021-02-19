import { API, ENDPOINTS } from '../constants/api'

export const getShows = () => {
  return fetch(`${API}${ENDPOINTS.SHOWS}?page=1`)
    .then(res => res.json())
}
