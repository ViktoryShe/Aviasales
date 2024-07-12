import {
  fetchSearchIdSuccess,
  fetchTicketsSuccess,
  fetchTicketsFailure,
  fetchTicketsStop,
  setLoading
} from './actions'

const BASE_URL = 'https://aviasales-test-api.kata.academy'
const MAX_RETRIES = 3

export const fetchTickets = (searchId, retries = 0) => async (dispatch) => {
  dispatch(setLoading(true))

  const fetchAllTickets = async (id, retryCount) => {
    try {
      const response = await fetch(`${BASE_URL}/tickets?searchId=${id}`)
      const data = await response.json()
      dispatch(fetchTicketsSuccess(data.tickets))

      if (data.stop) {
        dispatch(fetchTicketsStop())
        dispatch(setLoading(false))
      } else {
        await fetchAllTickets(id, 0)
      }
    } catch (error) {
      if (retryCount < MAX_RETRIES) {
        await fetchAllTickets(id, retryCount + 1)
      } else {
        dispatch(fetchTicketsFailure(error.message))
        dispatch(setLoading(false))
      }
    }
  }

  await fetchAllTickets(searchId, retries)
}

export const fetchSearchId = () => async (dispatch) => {
  dispatch(setLoading(true))

  try {
    const response = await fetch(`${BASE_URL}/search`)
    const data = await response.json()
    dispatch(fetchSearchIdSuccess(data.searchId))
    dispatch(fetchTickets(data.searchId))
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message))
    dispatch(setLoading(false))
  }
}