import { TOGGLE_FILTER, TOGGLE_ALL_FILTERS, SET_FILTER } from '../actions/actions'

const initialState = {
  all: true,
  noStops: true,
  oneStop: true,
  twoStops: true,
  threeStops: true,
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
