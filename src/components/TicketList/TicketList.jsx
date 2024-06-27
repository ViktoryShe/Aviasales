import React from 'react'

import Ticket from '../Ticket/Ticket'

import styles from './TicketList.module.scss'

const tickets = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

function TicketList() {
  return (
    <div className={styles.ticketList}>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} />
      ))}
      <button type="button">Показать еще 5 билетов!</button>
    </div>
  )
}

export default TicketList
