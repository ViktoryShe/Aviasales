export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS'
export const SET_FILTER = 'SET_FILTER'
export const SET_SORT = 'SET_SORT'
export const FETCH_SEARCH_ID_SUCCESS = 'FETCH_SEARCH_ID_SUCCESS'
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS'
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE'
export const FETCH_TICKETS_STOP = 'FETCH_TICKETS_STOP'

export const fetchSearchIdSuccess = (searchId) => ({
  type: FETCH_SEARCH_ID_SUCCESS,
  payload: searchId,
})

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
})

export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
})

export const fetchTicketsStop = () => ({
  type: FETCH_TICKETS_STOP,
})