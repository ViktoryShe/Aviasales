import { SET_SORT } from '../actions/actions'

const initialState = 'cheap'

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_SORT:
    return action.payload
  default:
    return state
  }
}

export default sortReducer
