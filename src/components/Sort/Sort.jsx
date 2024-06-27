import React from 'react'

import styles from './Sort.module.scss'

function Sort() {
  return (
    <div className={styles.sort}>
      <button type="button">САМЫЙ ДЕШЕВЫЙ</button>
      <button type="button">САМЫЙ БЫСТРЫЙ</button>
      <button type="button">ОПТИМАЛЬНЫЙ</button>
    </div>
  )
}

export default Sort
