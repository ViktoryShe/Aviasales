import React from 'react'

import styles from './Filters.module.scss'

function Filters() {
  return (
    <div className={styles.filters}>
      <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <label htmlFor="all">
        <input type="checkbox" id="all" /> Все
      </label>
      <label htmlFor="no-stops">
        <input type="checkbox" id="no-stops" /> Без пересадок
      </label>
      <label htmlFor="one-stop">
        <input type="checkbox" id="one-stop" /> 1 пересадка
      </label>
      <label htmlFor="two-stops">
        <input type="checkbox" id="two-stops" /> 2 пересадки
      </label>
      <label htmlFor="three-stops">
        <input type="checkbox" id="three-stops" /> 3 пересадки
      </label>
    </div>
  )
}

export default Filters
