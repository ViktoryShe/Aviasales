import { TOGGLE_FILTER, TOGGLE_ALL_FILTERS, SET_FILTER } from '../actions/actions'

const initialState = {
  all: false,
  noStops: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_FILTER: {
    return { ...state, [action.payload]: !state[action.payload] }
  }
  case SET_FILTER: {
    return { ...state, [action.payload.filter]: action.payload.value }
  }
  case TOGGLE_ALL_FILTERS: {
    const updatedState = {
      all: action.payload,
      noStops: action.payload,
      oneStop: action.payload,
      twoStops: action.payload,
      threeStops: action.payload,
    }
    return updatedState
  }
  default:
    return state
  }
}

export default filtersReducer
