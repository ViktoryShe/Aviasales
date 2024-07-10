import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TOGGLE_FILTER, TOGGLE_ALL_FILTERS, SET_FILTER } from '../../actions/actions'

import styles from './Filters.module.scss'

function Filters() {
  const filters = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  const handleToggle = (filter) => {
    dispatch({ type: TOGGLE_FILTER, payload: filter })

    if (filter === 'all') {
      dispatch({ type: TOGGLE_ALL_FILTERS, payload: !filters.all })
    } else {
      const allChecked = filters.all 
        ? false 
        : ['noStops', 'oneStop', 'twoStops', 'threeStops'].every((f) => f === filter ? !filters[f] : filters[f])
      dispatch({ type: SET_FILTER, payload: { filter: 'all', value: allChecked } })
    }
  }

  const getFilterLabel = (filter) => {
    switch (filter) {
    case 'all':
      return 'Все'
    case 'noStops':
      return 'Без пересадок'
    case 'oneStop':
      return '1 пересадка'
    case 'twoStops':
      return '2 пересадки'
    case 'threeStops':
      return '3 пересадки'
    default:
      return filter.replace('Stop', ' пересадка')
    }
  }

  const renderFilterCheckbox = (filter) => (
    <label htmlFor={filter} key={filter}>
      <input type="checkbox" id={filter} checked={filters[filter]} onChange={() => handleToggle(filter)} />
      {getFilterLabel(filter)}
    </label>
  )

  return (
    <div className={styles.filters}>
      <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      {['all', 'noStops', 'oneStop', 'twoStops', 'threeStops'].map(renderFilterCheckbox)}
    </div>
  )
}

export default Filters
