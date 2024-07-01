import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './reducers/counterReducer'
import sortReducer from './reducers/sortReducer'
import filtersReducer from './reducers/filtersReducer'

const rootReducer = {
  counter: counterReducer,
  sort: sortReducer,
  filters: filtersReducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export default store
