import React from 'react'

import Filters from '../Filters/Filters'
import Sort from '../Sort/Sort'
import TicketList from '../TicketList/TicketList'
import Logo from '../../assets/Logo.svg'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <Filters />
      <div>
        <Sort />
        <TicketList />
      </div>
    </div>
  )
}

export default App
