import { fetchSearchIdSuccess, fetchTicketsSuccess, fetchTicketsFailure, fetchTicketsStop } from '../actions/actions'

export const fetchTickets = (searchId, loadedTicketsCount = 0) => async (dispatch) => {
  if (loadedTicketsCount >= 5) {
    dispatch(fetchTicketsStop())
    return
  }
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const data = await response.json()
    dispatch(fetchTicketsSuccess(data.tickets))
    const newLoadedTicketsCount = loadedTicketsCount + data.tickets.length
    if (data.stop || newLoadedTicketsCount >= 5) {
      dispatch(fetchTicketsStop())
    } else {
      dispatch(fetchTickets(searchId, newLoadedTicketsCount))
    }
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message))
  }
}

export const fetchSearchId = () => async (dispatch) => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const data = await response.json()
    dispatch(fetchSearchIdSuccess(data.searchId))
    dispatch(fetchTickets(data.searchId))
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message))
  }
}
