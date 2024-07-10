import React from 'react'
import { Spin } from 'antd'

import styles from './Spinner.module.scss'

function Spinner() {
  return (
    <div className={styles.spinnerWrapper}>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  )
}

export default Spinner