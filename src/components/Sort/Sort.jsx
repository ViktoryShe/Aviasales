import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { SET_SORT } from '../../actions/actions'

import styles from './Sort.module.scss'

function Sort() {
  const sort = useSelector((state) => state.sort)
  const dispatch = useDispatch()

  const handleSortChange = (sortType) => {
    dispatch({ type: SET_SORT, payload: sortType })
  }

  const buttons = [
    { type: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ' },
    { type: 'fast', label: 'САМЫЙ БЫСТРЫЙ' },
    { type: 'optimal', label: 'ОПТИМАЛЬНЫЙ' },
  ]

  return (
    <div className={styles.sort}>
      {buttons.map((button) => (
        <button
          key={button.type}
          type="button"
          onClick={() => handleSortChange(button.type)}
          className={sort === button.type ? styles.active : ''}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default Sort
