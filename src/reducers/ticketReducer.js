import {
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_STOP,
  SET_LOADING
} from '../actions/actions'

const initialState = {
  searchId: null,
  tickets: [],
  error: null,
  stop: false,
  loadedTicketsCount: 0,
  loading: false,
}

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_SEARCH_ID_SUCCESS:
    return { ...state, searchId: action.payload }
  case FETCH_TICKETS_SUCCESS:
    return { 
      ...state, 
      tickets: [...state.tickets, ...action.payload],
      loadedTicketsCount: state.loadedTicketsCount + action.payload.length
    }
  case FETCH_TICKETS_FAILURE:
    return { ...state, error: action.payload }
  case FETCH_TICKETS_STOP:
    return { ...state, stop: true }
  case SET_LOADING:
    return { ...state, loading: action.payload }
  default:
    return state
  }
}

export default ticketReducer