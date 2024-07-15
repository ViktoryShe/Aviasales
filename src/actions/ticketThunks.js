import {
  fetchSearchIdSuccess,
  fetchTicketsSuccess,
  fetchTicketsFailure,
  fetchTicketsStop,
  setLoading
} from './actions'

const BASE_URL = 'https://aviasales-test-api.kata.academy'

export const fetchTickets = (searchId) => async (dispatch) => {
  dispatch(setLoading(true))

  const fetchAllTickets = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/tickets?searchId=${id}`)
      if (!response.ok && response.status >= 500) {
        await fetchAllTickets(id)
        return
      }
      const data = await response.json()
      dispatch(fetchTicketsSuccess(data.tickets))

      if (data.stop) {
        dispatch(fetchTicketsStop())
        dispatch(setLoading(false))
      } else {
        await fetchAllTickets(id)
      }
    } catch (error) {
      dispatch(fetchTicketsFailure(error.message))
      dispatch(setLoading(false))
    }
  }

  await fetchAllTickets(searchId)
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