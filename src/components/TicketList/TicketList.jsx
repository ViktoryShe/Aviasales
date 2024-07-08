import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSearchId } from '../../modules/ticketThunks'
import Ticket from '../Ticket/Ticket'

import styles from './TicketList.module.scss'

function TicketList() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const stop = useSelector((state) => state.tickets.stop)
  const [ticketCount, setTicketCount] = useState(5)

  const memoizedTickets = useMemo(() => tickets.slice(0, ticketCount), [tickets, ticketCount])

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  useEffect(() => {
    if (!stop && memoizedTickets.length === 0) {
      dispatch(fetchSearchId())
    }
  }, [dispatch, stop, memoizedTickets])

  const handleShowMore = () => {
    setTicketCount((prevCount) => prevCount + 5)
  }

  return (
    <div className={styles.ticketList}>
      {memoizedTickets.length > 0 ? (
        memoizedTickets.map((ticket, index) => (
          <Ticket key={ticket.id || `${ticket.price}-${index}`} ticket={ticket} />
        ))
      ) : (
        <p>Loading...</p>
      )}
      <button type="button" onClick={handleShowMore}>Показать еще 5 билетов!</button>
    </div>
  )
}

export default TicketList
