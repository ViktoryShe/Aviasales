import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './reducers/counterReducer'
import sortReducer from './reducers/sortReducer'
import filtersReducer from './reducers/filtersReducer'
import ticketReducer from './reducers/ticketReducer'

const rootReducer = {
  counter: counterReducer,
  sort: sortReducer,
  filters: filtersReducer,
  tickets: ticketReducer,
}

const isDevelopment = process.env.NODE_ENV !== 'production'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: isDevelopment,
      serializableCheck: isDevelopment,
    }),
  devTools: isDevelopment,
})

export default store